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
}