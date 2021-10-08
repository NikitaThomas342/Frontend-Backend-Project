const userinfoReducer = (state = '',action) => {
    switch(action.type){
        case 'USER_LOGIN':
            state = action.payload
            return state
        case 'USER_LOGOUT':
            state = ''
            return state
        default:
            return state
    }
}

export default userinfoReducer