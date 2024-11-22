/*export const Incrementer = (step) => {
    return {type:'Incrementer' , payload:step}    
}
export const Decrementer = () => {
    return {type:'Decrementer'}    
}
export const Reset = () => {
    return {type:'Reset'}    
}*/
export const AddUserAction = (user) => {
    return {type:"Add_user" , payload:user}
}
export const UpdateUserAction = (newuser) => {
    return {type:"Update_user" , payload:newuser}
}
export const DeleteUserAction = (id) => {
    return {type: "Delete_user" , payload:id}
}