import {GetAuthHeader} from '../utils/users';

import axios from 'axios';


export default class ScrumProjects {
    static async getAllScrumProjects(){
        const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
        try {
            const promise = await axios.get(`${process.env.REACT_APP_SERVER}/scrum-projects/my/`,{
                headers: headers,
            });
            return promise.data.results;
          } catch(error){
            console.log(error.message);
          }
        return []
    }
}