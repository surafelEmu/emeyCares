import axios from 'axios';
import bookingConstants from '../constants/bookingConstants' ;

export const bookNow = (data) => async (dispatch) => {
    try{

        console.log(data) ;

        dispatch({type: bookingConstants.REGISTER_BOOKING_REQUEST}) ;

        const config = {
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization" : `Bearer ${document.cookie}`
        }
    }
        const booking = await axios.post('http://localhost:4000/api/v1/book/create' , data , config) ;

        dispatch({type: bookingConstants.REGISTER_BOOKING_SUCCESS , payload: booking}) ;

    }catch(error) {
        dispatch({type: bookingConstants.REGISTER_BOOKING_FAIL , payload: error}) ;
    }
}