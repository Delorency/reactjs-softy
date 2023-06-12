export const GetRole = (team, setter) => {
    for (let i=0; i<team.length; i++){
        if (team[i].user.username === localStorage.getItem('user_username')){
            setter(team[i].role);
            break;
        }
    } 
}