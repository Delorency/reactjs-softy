import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Scrums {
  static async getAllScrumProjects(setter, filter=null){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/scrum-projects/my/`,{
      headers: headers,
    }).then(response => {
      setter(response.data.results);
      if (filter !== null){
        filter(response.data.results)
      }
    }).catch(error => {
      console.log(error);
    });
  }
  static async createProject(name, description, is_private, setResult, setOpen, handleToProject){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.post(`${process.env.REACT_APP_SERVER}/scrum-projects/`,
    {
      name,
      description,
      'is_private':is_private,
    },
    {
        headers: headers,
    }).then(response => {
      handleToProject(response.data.id);
    }).catch(error => {
      if (error.response) {
        const errors = {
          'name':'Name',
          'description':'Description',
          'is_private':'is_private',
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
  static async getScrumProject(id, setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/scrum-projects/${id}/`,{
      headers: headers,
    }).then(response => {
      setter(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
}