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

  static async checkRole(id, navigate, setOpen, setResult, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.patch(`${process.env.REACT_APP_SERVER}/tasks/${id}/`,{},
    {
        headers: headers,
    }).then(response => {
      navigate(`/update-task/${id}`);
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          setResult('You cannot change the task')
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }

  static async getSubTask(id, setter, setcheckValue){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/tasks/task-item/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data);
        setcheckValue(response.data.close)
    }).catch(error => {
      console.log(error);
    });
  }

  static async changeCloseSubTask(id, close, setCheck, setOpen, setResult, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.patch(`${process.env.REACT_APP_SERVER}/tasks/task-item/change-close/${id}/`,
    {
      close
    },
    {
        headers: headers,
    }).then(response => {
        setResult('SubTask has been updated');
        setOpen(true);
        setSuccess(true);
        setCheck(close);
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          setResult('You cannot change this subtask');
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }

  static async getTaskWorkers(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/tasks/task-item/get-workers/${id}/`,{
      headers: headers,
    }).then(response => {
        setter(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  static async updateSubTask(id, end_at, worker, close, setOpen, setResult, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader());
    let data = {close}
    if (worker !== ''){data['worker'] = worker}
    if (end_at !== ''){data['end_at'] = end_at}
    await axios.patch(`${process.env.REACT_APP_SERVER}/tasks/task-item/${id}/`,data,
    {
        headers: headers,
    }).then(response => {
        setResult('SubTask has been updated');
        setOpen(true);
        setSuccess(true);
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          const errors = {
            'end_at':'End at',
            'worker':'Worker', 
            'close':'Close', 
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

  static async removeWorkerSubTask(id, setter, setOpen, setResult, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader());
    await axios.patch(`${process.env.REACT_APP_SERVER}/tasks/task-item/remove-worker/${id}/`,{},
    {
        headers: headers,
    }).then(response => {
        setResult('Worker has been removed');
        setOpen(true);
        setSuccess(true);
        setter('');
      }).catch(error => {
        if (error.response && error.response.status < 500) {
          setResult('Worker has not been removed');
        } else {setResult('Server error')}
        setOpen(true);
        setSuccess(false);
        console.log(error);
    });
  }

  static async createSubTask(name, worker, task, setResult, setOpen, handleToBack){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader());
    let data = {name, 'task':task}
    if (worker !== ''){data['worker'] = worker}
    await axios.post(`${process.env.REACT_APP_SERVER}/tasks/task-item/`,data,
    {
        headers: headers,
    }).then(response => {
      handleToBack();
    }).catch(error => {
      if (error.response && error.response.status < 500) {
        const errors = {
          'name':'Name',
          'end_at':'End date',
          'worker':'Worker',
          'task':'Task',
          'Invalid input.':'Invalid input.'
        }
        const key = Object.keys(error.response.data)[0];
        setResult(errors[key]+': '+ error.response.data[key][0]);
      } else {setResult('Server error')}
      setOpen(true);
      console.log(error);
    });
  }
  static async deleteSubTask(id, navigate, setResult, setOpen, setSuccess){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.delete(`${process.env.REACT_APP_SERVER}/tasks/task-item/${id}/`,{
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