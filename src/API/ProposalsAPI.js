import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Proposals {
  static async createProposal(role, username, email, scrum_project, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader());
    if (username === ''){username='-'}
    if (email === ''){email='@'}
    await axios.post(`${process.env.REACT_APP_SERVER}/proposals/`,{
        role,
        username,
        email,
        scrum_project
    },{
      headers: headers,
    }).then(response => {
        setResult('Proposal has been sent')
        setOpen(true);
        setSuccess(true);
      }).catch(error => {
        if (error.response) {
          const errors = {
            'username':'Username',
            'email':'Email',
            'role':'Role',
          }
          const key = Object.keys(error.response.data)[0];
          setResult(errors[key]+': '+ error.response.data[key][0]);
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }
  static async getMyProposals(setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/proposals/my/`,{
      headers: headers,
    }).then(response => {
        setter(response.data.results);
    }).catch(error => {
      console.log(error);
    });
  }
  static async getProposal(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/proposals/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data.results);
    }).catch(error => {
      console.log(error);
    });
  }
  static async acceptProposal(id, redirectionHandler){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.patch(`${process.env.REACT_APP_SERVER}/proposals/accept-declain/${id}/`,{},{
      headers: headers,
    }).then(response => {
        redirectionHandler();
    }).catch(error => {
      console.log(error);
    });
  }
  static async declainProposal(id, redirectionHandler){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.delete(`${process.env.REACT_APP_SERVER}/proposals/accept-declain/${id}/`,{
      headers: headers,
    }).then(response => {
        redirectionHandler();
    }).catch(error => {
      console.log(error);
    });
  }
}