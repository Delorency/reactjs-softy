export const CheckUserToken = () => {
    let x = localStorage.getItem('token');
    return (x !== null) ? true : false
}


export const GetAuthHeader = () => {
    let x = localStorage.getItem('token');
    return (x !== null) ? {'Authorization':`Token ${x}`} : {'':''} 
}


export const SetUserToken = (key, value) => {
    localStorage.setItem(key, value);
}


export const RemoveUserToken = (key) => {
    localStorage.removeItem(key);
}