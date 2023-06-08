import {SetUserToken} from '../utils/UsersUtils';

import axios from 'axios';


export default class Users {
  static async LoginUser(email, password) {
    const headers = {'Content-Type': 'application/json'}
    await axios.post(`${process.env.REACT_APP_SERVER}/token/login/`,
    {
      'email':email,
      'password':password
    },
    {
        headers: headers,
    }).then(response => {
      SetUserToken(response.data.auth_token);
      return true
    }).catch(error => {
      console.log(error.message);
    })
    return false;
  }
}