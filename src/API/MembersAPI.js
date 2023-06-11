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
}