import { combineReducers } from "redux";

import storage from 'redux-persist/lib/storage' ;

import {serviceReducer} from './servicesReducer'
import {signup, signupReducer} from './authReducer'
import {addEmployeeReducer, employeeDetailReducer, listEmployeesReducer , employeeCommentReducer} from './employeeReducer' ;

import { persistReducer } from "redux-persist";
import { bookingReducer } from "./bookReducer";

const persistConfig = {
    key: 'root' ,
    storage ,
    whiteList: ['employeeList' , 'signup']
}

const rootReducer = combineReducers ({
    services: serviceReducer ,
    signup: signupReducer ,
    employeeList: listEmployeesReducer ,
    addEmployee: addEmployeeReducer ,
    empDetail: employeeDetailReducer ,
    empComment: employeeCommentReducer ,
    booking: bookingReducer
}) ;

export default persistReducer( persistConfig , rootReducer );