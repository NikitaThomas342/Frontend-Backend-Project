const authReducer = (state=false,action) => {
    switch(action.type){
        case'ADMIN_MODE':
            return !state
        case'ADMIN_RESET':
            state = false
            return state
        default:
            return state
    }
}

export default authReducer