import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';



export default class Sprints {
  static async getProjectSprints(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/sprints/get/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data.results);
    }).catch(error => {
      console.log(error);
    });
  }
  static async createSprint(start_at, end_at, scrum_project, setResult, setOpen, handleToBacklogs){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/sprints/`,
    {
      start_at,
      end_at,
      scrum_project,
    },
    {
        headers: headers,
    }).then(response => {
      handleToBacklogs(response.data.id);
    }).catch(error => {
      if (error.response && error.response.status < 500) {
        const errors = {
          'start_at':'Start at',
          'end_at':'End at',
          'Invalid input.':'Invalid input.',
          'scrum_project': 'Client side error'
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
  static async getSprint(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/sprints/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  static async updateSprint(id, start_at, end_at, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    let data = {};
    if (start_at !== ''){data['start_at'] = start_at}
    if (end_at !== ''){data['end_at'] = end_at}
    await axios.patch(`${process.env.REACT_APP_SERVER}/sprints/${id}/`,data,
    {
        headers: headers,
    }).then(response => {
        setResult('Sprint has been updated');
        setOpen(true);
        setSuccess(true);
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'start_at':'Start at',
            'end_at':'End at',
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
  static async changeBacklogsSprint(id, backlogs, remove=false, handler){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.patch(`${process.env.REACT_APP_SERVER}/sprints/${id}/`,{
      backlogs,
      'remove':remove
    },{
      headers: headers,
    }).then(response => {
      handler();
    }).catch(error => {
      console.log(error);
    });
  }
  static async deleteSprint(id, navigate, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.delete(`${process.env.REACT_APP_SERVER}/sprints/${id}/`,{
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