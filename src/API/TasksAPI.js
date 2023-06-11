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
}