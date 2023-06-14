export const GetRole = (task,setRole) => {
    for (let i=0; i<task.workers.length; i++){
        console.log(task.workers[i]);
        if (task.workers[i].user.username === localStorage.getItem('user_username')){
            setRole(task.workers[i].role);
            break
        }
    } 
}