import employeeConstants from '../constants/employeeConstants'
import axios from 'axios';

export const employeeList = () => async (dispatch) => {
    try{
        dispatch({type: employeeConstants.ALL_EMPLOYEES_REQUEST}) ;

        const {data} = await axios.get('http://localhost:4000/api/v1/caregiver/all') ;

        dispatch({type: employeeConstants.ALL_EMPLOYEES_SUCCESS , payload: data.data}) ;

    }catch(error) {
        dispatch({type: employeeConstants.ALL_EMPLOYEES_FAIL , payload: error}) ;
    }
}

export const addEmployee = (employee) => async (dispatch) => {
    try{
        dispatch({type: employeeConstants.REGISTER_EMPLOYEE_REQUEST}) ;

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('http://localhost:4000/api/v1/caregiver/create' , employee , config) ;

        dispatch({type: employeeConstants.REGISTER_EMPLOYEE_SUCCESS , payload: data})

    }catch(error) {
        console.log(error) ;

        dispatch({type: employeeConstants.REGISTER_EMPLOYEE_FAIL , payload: error}) ;

    }
} 


export const employeeDetail = (id) => async (dispatch) => {
    try{
        dispatch({type: employeeConstants.EMPLOYEE_DETAILS_REQUEST}) ;


        const {data} = await axios.get(`http://localhost:4000/api/v1/caregiver/${id}` )

        dispatch({type: employeeConstants.EMPLOYEE_DETAILS_SUCCESS , payload: data}) ;
    }catch(error) {
        dispatch({type: employeeConstants.EMPLOYEE_DETAILS_FAIL , payload: error}) ;
    }
}

export const commentOnEmployee = (token ,comment) => async (dispatch) =>  {
    try{
        dispatch({type: employeeConstants.COMMENT_EMPLOYEE_REQUEST}) ;

        console.log(token) ;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            } , 
            cookie: token
        }
        const {data} = await axios.post('http://localhost:4000/api/v1/comment/create' , comment , config)

        dispatch({type: employeeConstants.COMMENT_EMPLOYEE_SUCCESS , payload: data}) ;
    }catch(error) {

        console.log(error) ;
        dispatch({type: employeeConstants.COMMENT_EMPLOYEE_FAIL , payload: error})
        
    }
}