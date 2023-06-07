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