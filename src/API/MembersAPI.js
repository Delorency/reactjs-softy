import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Members {
  static async getAllProjectUserMember(setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/members/my/`,{
      headers: headers,
    }).then(response => {
      setter(response.data.results);
    }).catch(error => {
      console.log(error);
    });
  }
  static async getMember(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/members/${id}/`,{
      headers: headers,
    }).then(response => {
      setter(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  static async updateMember(id, role, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.patch(`${process.env.REACT_APP_SERVER}/members/${id}/`,{
      role,
    },{
      headers: headers,
    }).then(response => {
      setResult('Member has been updated');
      setOpen(true);
      setSuccess(true);
    }).catch(error => {
      if (error.response && error.response.status < 500) {
        const errors = {
          'role':'Start at',
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
  static async deleteMember(id, navigate, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.delete(`${process.env.REACT_APP_SERVER}/members/${id}/`,{
      headers: headers,
    }).then(response => {
      navigate(-1);
    }).catch(error => {
      if (error.response && error.response.status < 500) {
        setResult('Client error');
      } else {setResult('Server error')}
      setOpen(true);
      setSuccess(false);
      console.log(error);
  });
  }
}