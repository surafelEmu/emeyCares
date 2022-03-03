import { combineReducers } from "redux";

import {serviceReducer} from './servicesReducer'
import {signup, signupReducer} from './authReducer'

const persistConfig = {
    key: 'root' ,
}

const rootReducer = combineReducers ({
    services: serviceReducer ,
    signup: signupReducer
}) ;

export default rootReducer ;