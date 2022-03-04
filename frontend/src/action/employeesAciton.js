import employeeConstants from '../constants/employeeConstants'
import axios from 'axios';

export const employeeList = () => async (dispatch) => {
    try{
        dispatch({type: employeeConstants.ALL_EMPLOYEES_REQUEST}) ;

        const {data} = await axios('http://localhost:4000/api/v1/caregiver/all') ;

        dispatch({type: employeeConstants.ALL_EMPLOYEES_SUCCESS , payload: data.data}) ;

    }catch(error) {
        dispatch({type: employeeConstants.ALL_EMPLOYEES_FAIL , payload: error}) ;
    }
}