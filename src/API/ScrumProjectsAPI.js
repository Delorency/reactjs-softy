import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Scrums {
  static async getAllScrumProjects(setProjects){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/scrum-projects/my/`,{
      headers: headers,
    }).then(response => {
      setProjects(response.data.results);
    }).catch(error => {
      console.log(error.message);
    });
  }
}