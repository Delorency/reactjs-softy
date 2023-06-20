import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Tasks {
  static async getAllUserTasks(setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/tasks/my/`,{
      headers: headers,
    }).then(response => {
        setter(response.data.results.slice(0,11));
    }).catch(error => {
      console.log(error);
    });
  }
  static async createTask(name, description, backlog, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',}, GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/tasks/`,
    {
      name,
      description,
      backlog,
    },
    {
        headers: headers,
    }).then(response => {
      setResult('Task has been created');
      setOpen(true);
      setSuccess(true);
    }).catch(error => {
      if (error.response && error.response.status < 500) {
        const errors = {
          'name':'Name',
          'description':'Description',
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
  static async getTask(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/tasks/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  static async updateTask(id, name='', description='', setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    let data = {}
    if (name !== ''){data['name'] = name}
    if (description !== ''){data['description'] = description}
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
            'description':'Description',
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