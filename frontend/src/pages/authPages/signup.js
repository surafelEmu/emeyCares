import React , {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {signup} from '../../action/userAction' ;

export default function() {
    const [user , setUser ] = useState({
        name: '' ,
        email: '' ,
        password: '' 
    }) ;

    const dispatch = useDispatch() ;

    const { name , email , password} = user ;

    const onChange = (e) => {
        e.preventDefault() ;

        if(e.target.name == 'submit') {
            console.log(user) 
            dispatch(signup(user)) ;
        }
        else{
            setUser({...user , [e.target.name]: e.target.value})

        }

       



    }

    return (
        <body>
            <div>
                This is login

                <div>
                    <input type="text" name='name' value={name} onChange={onChange} />
                    <input type="text" name='email' value={email} onChange={onChange} />
                    <input type="text" name='password' value={password} onChange={onChange} />
                    <input type="button" name='submit' value="submit It" onClick={onChange} />

                </div>
            </div>
        </body>

    ) 
} 