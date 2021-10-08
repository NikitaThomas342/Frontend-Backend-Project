const userIdReducer = (state='',action) => {
    switch(action.type){
        case 'USER_ID_LOGIN':
            state = action.payload
            return state
        case 'USER_ID_LOGOUT':
            state = ''
            return state
        default:
            return state
    }
}

export default userIdReducer