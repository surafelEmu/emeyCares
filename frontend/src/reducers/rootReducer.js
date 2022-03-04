import { combineReducers } from "redux";

import storage from 'redux-persist/lib/storage' ;

import {serviceReducer} from './servicesReducer'
import {signup, signupReducer} from './authReducer'
import {listEmployeesReducer} from './employeeReducer' ;

import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root' ,
    storage ,
    whiteList: ['employeeList']
}

const rootReducer = combineReducers ({
    services: serviceReducer ,
    signup: signupReducer ,
    employeeList: listEmployeesReducer
}) ;

export default persistReducer( persistConfig , rootReducer );