import bookingConstants from '../constants/bookingConstants' ;

export const bookingReducer = (state = {booking: {}} , action) => {
    switch(action.type) {
        case bookingConstants.REGISTER_BOOKING_REQUEST: 
            return {
                loading: true 
            }
        case bookingConstants.REGISTER_BOOKING_SUCCESS: 
            return {
                loading: false ,
                booking: action.payload
            }
        case bookingConstants.REGISTER_BOOKING_FAIL: 
            return {
                loading: false ,
                error: action.payload
            }
        default: 
            return state ;
    }
}