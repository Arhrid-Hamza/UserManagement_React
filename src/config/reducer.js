/*const initialeState = {num:0}
const reducer = (state = initialeState , action) => {
    switch(action.type){
        case 'Incrementer':
            return{...state , num:state.num+action.payload}
        case 'Decrementer':
            return{...state , num:state.num+-1}
        case 'Reset':
                return{...state , num:0}
        default:
            return state
    }
}
export default reducer*/
const initialeState = {
    users: [
        { id: 1, name: "Mohamed Allaoui", email: "Allaoui@gmail.com" },
        { id: 2, name: "Hind Bennani", email: "Bennani@gmail.com" },
    ]
};

const reducer = (state = initialeState, action) => {
    switch (action.type) {
        case "Add_user":
            return { ...state, users: [...state.users, action.payload] };
        case "Update_user":
            const user = state.users.find((u) => u.id === parseInt(action.payload.id));
            if (user) {
                user.name = action.payload.name;
                user.email = action.payload.email; // Fixed here
            }
            return { ...state }; // Return a new state
        case "Delete_user":
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] }; // Fixed here
        default:
            return state;
    }
};

export default reducer;
