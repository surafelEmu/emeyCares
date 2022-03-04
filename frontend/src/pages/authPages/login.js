import {useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux' ;
import { login } from '../../action/userAction';
export default function({D}) {

    const [user , setUser] = useState({
        email: '' ,
        password: ''
    }) ;

    const {email , password} = user ;

    const dispatch = useDispatch() ;

    function onChange(e){
        e.preventDefault() ;

        if(e.target.name == 'submit') {
            console.log(user) ;
            dispatch(login(user)) ;

        }else {
            setUser({...user , [e.target.name]: e.target.value}) ;

        }
    }

    return (
        <div> 
            <input type="text" name="email" placeholder="email" value={email} onChange={onChange} />
            <input type="password" name="password" placeholder="password" value={password} onChange={onChange} />
            <input type="button" name="submit" value="Log In" onClick={onChange} />

        </div>
    )
}