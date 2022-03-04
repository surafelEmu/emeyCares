import employee from '../pages/employee';

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

export const addEmployeeReducer = (state = {employee: {}} , action) => {
    switch(action.type) {
        case employeeConstants.REGISTER_EMPLOYEE_REQUEST: 
            return {
                loading: true 
            }
        case employeeConstants.REGISTER_EMPLOYEE_SUCCESS: 
            return {
                loading: false ,
                employee: action.payload
            }
        case employeeConstants.REGISTER_EMPLOYEE_SUCCESS: 
            return {
                loading: false ,
                error: action.payload
            }
        default: 
            return state
    }
}

export const employeeDetailReducer = (state = {empDetail: {}} , action) => {
    switch(action.type) {
        case employeeConstants.EMPLOYEE_DETAILS_REQUEST: 
            return {
                loading: true 
            }
        case employeeConstants.EMPLOYEE_DETAILS_SUCCESS: 
            return {
                laoding: false ,
                empDetail: action.payload
            }
        case employeeConstants.ALL_EMPLOYEES_FAIL: 
            return {
                loading: false ,
                error: action.payload
            }
        default: 
            return state 
    }
}

export const employeeCommentReducer = (state = {comment: {}} , action) => {
    switch(action.type) {
        case employeeConstants.COMMENT_EMPLOYEE_REQUEST: 
            return {
                loading: true 
            }
        case employeeConstants.COMMENT_EMPLOYEE_SUCCESS: 
            return {
                loading: false ,
                comment: action.payload
            }
        case employeeConstants.COMMENT_EMPLOYEE_FAIL: 
            return {
                loading: false ,
                error: action.payload
            }
        default:
            return state 
    }
}