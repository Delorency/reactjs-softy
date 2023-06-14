import {SetUserToken, SetUserInfo, GetAuthHeader, RemoveUserInfo} from '../utils/UsersUtils';

import axios from 'axios';


export default class Users {
  static async getUserInfo() {
    const headers = Object.assign({'Content-Type': 'application/json',}, GetAuthHeader());
    await axios.get(`${process.env.REACT_APP_SERVER}/users/me/`,
    {
        headers: headers,
    }).then(response => {
      SetUserInfo(response.data);
    }).catch(error => {
      console.log(error);
    })
  };

  static async getCurrentUser(setter) {
    const headers = Object.assign({'Content-Type': 'application/json',}, GetAuthHeader());
    await axios.get(`${process.env.REACT_APP_SERVER}/users/me/`,
    {
        headers: headers,
    }).then(response => {
      setter(response.data);
    }).catch(error => {
      console.log(error);
    })
  };

  static async loginUser(email, password, setResult, setOpen, handleRefresh) {
    const headers = {'Content-Type': 'application/json'}
    await axios.post(`${process.env.REACT_APP_SERVER}/token/login/`,
    {
      email,
      password
    },
    {
        headers: headers,
    }).then(response => {
      SetUserToken(response.data.auth_token);
      this.getUserInfo();
      handleRefresh();
    }).catch(error => {
      if (error.response) {
        setResult('Invalid email or password');
      } else {setResult('Server error');}
      setOpen(true);
      console.log(error);
    })
  };

  static async registrationUser(email, username, last_name, first_name, password, setResult, setOpen, setSuccess) {
    const headers = {'Content-Type': 'application/json'}
    await axios.post(`${process.env.REACT_APP_SERVER}/users/`,
    {
      email,
      username,
      last_name,
      first_name,
      password
    },
    {
        headers: headers,
    }).then(response => {
      setResult('Account has been created')
      setOpen(true);
      setSuccess(true);
    }).catch(error => {
      if (error.response) {
        const errors = {
          'username':'Username',
          'email':'Email',
          'last_name':'Surname',
          'first_name':'Name',
          'password':'Password',
        }
        const key = Object.keys(error.response.data)[0];
        setResult(errors[key]+': '+ error.response.data[key][0]);
      } else {setResult('Server error')}
      setOpen(true);
      setSuccess(false);
      console.log(error);
    })
  }

  static async logoutUser(redirectHandler, handleRefresh) {
    const headers = Object.assign({'Content-Type': 'application/json',}, GetAuthHeader());
    await axios.post(`${process.env.REACT_APP_SERVER}/token/logout/`,{},
    {
        headers: headers,
    }).then(response => {
      RemoveUserInfo();
      redirectHandler();
      handleRefresh();
    }).catch(error => {
      console.log(error);
    })
  }
  static async updateUserInfo(first_name, last_name, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    let data = {};
    if (first_name !== ''){data['first_name'] = first_name}
    if (last_name !== ''){data['last_name'] = last_name}
    await axios.patch(`${process.env.REACT_APP_SERVER}/users/me/`,data,
    {
        headers: headers,
    }).then(response => {
        setResult('User info has been updated');
        setOpen(true);
        setSuccess(true);
        this.getUserInfo();
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'first_name':'email',
            'last_name':'last_name',
            'Invalid input.':'Invalid input.'
          }
          const key = Object.keys(error.response.data)[0];
          setResult(errors[key]+': '+ error.response.data[key][0]);
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }
  static async updateUserEmail(new_email, current_password, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/users/set_email/`,{
      new_email,
      current_password
    },
    {
        headers: headers,
    }).then(response => {
        setResult('Email has been updated');
        setOpen(true);
        setSuccess(true);
        this.getUserInfo();
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'new_email':'Email',
            'current_password':'Password',
            'Invalid input.':'Invalid input.'
          }
          const key = Object.keys(error.response.data)[0];
          setResult(errors[key]+': '+ error.response.data[key][0]);
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }
  static async updateUserPassword(new_password, current_password, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/users/set_password/`,{
      new_password,
      current_password
    },
    {
        headers: headers,
    }).then(response => {
        setResult('Password has been updated');
        setOpen(true);
        setSuccess(true);
        this.getUserInfo();
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'new_password':'New password',
            'current_password':'Current password',
            'Invalid input.':'Invalid input.'
          }
          const key = Object.keys(error.response.data)[0];
          setResult(errors[key]+': '+ error.response.data[key][0]);
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }
  static async deleteUser(current_password, setResult,
    setOpen, setSuccess, profileRedirect, handleRefresh){
    const headers = Object.assign({'Content-Type': 'application/json',}, GetAuthHeader());
    await axios({
      method:'DELETE',
      url:`${process.env.REACT_APP_SERVER}/users/me/`,
      headers:headers,
      data:{current_password}
    }).then(response => {
      RemoveUserInfo();
      profileRedirect();
      handleRefresh();
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'current_password':'Current password',
            'Invalid input.':'Invalid input.'
          }
          const key = Object.keys(error.response.data)[0];
          setResult(errors[key]+': '+ error.response.data[key][0]);
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }
}