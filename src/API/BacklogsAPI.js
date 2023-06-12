import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';



export default class Backlogs {
  static async getProjectBacklogs(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/backlogs/get/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data.results);
    }).catch(error => {
      console.log(error);
    });
  }
  static async createBacklog(name, difficult, scrum_project, setResult, setOpen, handleToBacklogs){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/backlogs/`,
    {
      name,
      difficult,
      scrum_project,
    },
    {
        headers: headers,
    }).then(response => {
      handleToBacklogs(response.data.id);
    }).catch(error => {
      if (error.response) {
        const errors = {
          'name':'Name',
          'difficult':'difficult',
          'Invalid input.':'Invalid input.'
        }
        const key = Object.keys(error.response.data)[0];
        if (key === "0"){
          setResult('Invalid data');
        }else{
          setResult(errors[key]+': '+ error.response.data[key][0]);
        }
      } else {setResult('Server error')}
      setOpen(true);
      console.log(error);
    });
  }
  static async getBacklog(id, setter, setterValue){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/backlogs/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data);
        setterValue(response.data.difficult);
    }).catch(error => {
      console.log(error);
    });
  }
  static async updateBacklog(id, name, difficult, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    let data = {difficult}
    if (name !== ''){data['name'] = name}
    await axios.patch(`${process.env.REACT_APP_SERVER}/backlogs/${id}/`,data,
    {
        headers: headers,
    }).then(response => {
        setResult('Backlog has been updated');
        setOpen(true);
        setSuccess(true);
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'name':'Name',
            'difficult':'Difficult',
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
  static async deleteBacklog(id, navigate, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.delete(`${process.env.REACT_APP_SERVER}/backlogs/${id}/`,{
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