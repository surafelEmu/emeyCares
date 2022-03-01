const servicesConstant = require('../constants/serviceConstants') ;

export const loadServices = (message) => (dispatch) => {
    dispatch({type: servicesConstant.LOAD_SERVICE_REQUEST , payload: message}) ;
}