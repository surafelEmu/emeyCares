import { combineReducers } from "redux";

import {serviceReducer} from './servicesReducer'


const persistConfig = {
    key: 'root' ,
}

const rootReducer = combineReducers ({
    services: serviceReducer ,
}) ;

export default rootReducer ;