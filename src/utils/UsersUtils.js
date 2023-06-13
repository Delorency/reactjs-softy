export const CheckUserToken = () => {
    let x = localStorage.getItem('token');
    return (x !== null) ? true : false
}


export const GetAuthHeader = () => {
    let x = localStorage.getItem('token');
    return (x !== null) ? {'Authorization':`Token ${x}`} : null 
}


export const SetUserToken = (value) => {
    localStorage.setItem('token', value);
}


export const RemoveUserToken = (key) => {
    localStorage.removeItem(key);
}


export const SetUserInfo = (data) => {
    localStorage.setItem('user_email', data.email);
    localStorage.setItem('user_username', data.username);
    localStorage.setItem('user_last_name', data.last_name);
    localStorage.setItem('user_first_name', data.first_name);
}

export const RemoveUserInfo = (data) => {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_username');
    localStorage.removeItem('user_last_name');
    localStorage.removeItem('user_first_name');
    localStorage.removeItem('token');
}