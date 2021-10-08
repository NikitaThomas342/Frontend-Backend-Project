export const loginStatus = () => {
    return {
        type: 'LOGIN'
    }
}

export const logoutStatus = () => {
    return {
        type: 'LOGOUT'
    }
}

export const userLogin = (username) => {
    return {
        type: 'USER_LOGIN',
        payload: username
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const useridLogin = (userid) => {
    return {
        type: 'USER_ID_LOGIN',
        payload: userid
    }
}

export const useridLogout = () => {
    return {
        type: 'USER_ID_LOGOUT'
    }
}

export const adminMode = () => {
    return {
        type: 'ADMIN_MODE'
    }
}

export const adminClose = () => {
    return {
        type: 'ADMIN_RESET'
    }
}