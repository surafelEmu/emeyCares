const employeeConstants = require('../constants/employeeConstants') ;

export const listEmployeesReducer = (state = {employees: {}} , action) => {
    switch(action.type) {
        case employeeConstants.ALL_EMPLOYEES_REQUEST: 
            return {
                loading: true 
            }
        case employeeConstants.ALL_EMPLOYEES_SUCCESS: 
            return {
                loading: false ,
                data: action.payload
            }
        case employeeConstants.ALL_EMPLOYEES_FAIL: 
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state ;
    }
}