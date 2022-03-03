import userConstants from '../constants/userConstants' ;


export const  signupReducer = (state = {user: {}} , action) => {
    switch(action.type) {
        case userConstants.REGISTER_USER_REQUEST: 
        case userConstants.LOGIN_REQUEST: 
            return {
                loading: true 
            }
        case userConstants.REGISTER_USER_SUCCESS:
        case userConstants.LOGIN_SUCCESS: 
            return {
                loading: false ,
                data: action.payload
            }
        case userConstants.REGISTER_USER_FAIL: 
        case userConstants.LOGIN_FAIL: 
            return {
                loading: false ,
                error: action.payload
            }
        default: 
            return state
        
    }
}