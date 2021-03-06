import userConstants from '../constants/userConstants'
import axios from 'axios' ;


export const signup = (user) => async (dispatch) => {


    try{

        dispatch({type: userConstants.REGISTER_USER_REQUEST , payload: user})
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log('before axios')
        const {data} = await axios.post('http://localhost:4000/api/v1/user/signup' , user , config)

        
        console.log(data) ;
        dispatch({type: userConstants.REGISTER_USER_SUCCESS , payload: data}) ;
    }catch(err) {
        console.log(err.error) ;

        dispatch({type: userConstants.REGISTER_USER_FAIL , payload: err.message}) ;
    }


}

export const login = (user) => async (dispatch) => {
    try{
        dispatch({type: userConstants.LOGIN_REQUEST}) ;

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('http://localhost:4000/api/v1/user/signin' , user , config)
        document.cookie = "token=" + data.token ;
        console.log(document.cookie) ;
       
        dispatch({type: userConstants.LOGIN_SUCCESS , payload: data})
    }catch(error){
        dispatch({type: userConstants.LOGIN_FAIL , payload: error}) ;
        console.log(error) ;
    }
}