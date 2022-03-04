
import {useState , useEffect} from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import { addEmployee } from '../action/employeesAciton';

export default function() {

    const [caregiver , setCaregiver] = useState({
        name: '' ,
        age: 40 ,
        email: '' ,
        role: '' ,

    })

    const dispatch = useDispatch() ;

    const {name , age , email , role} = caregiver ;


   function onChange(e) {
        e.preventDefault() ;

        if(e.target.name == 'submit') {
            console.log(caregiver) ;

            dispatch(addEmployee(caregiver)) ;

        }else{
            setCaregiver({...caregiver , [e.target.name]: e.target.value}) ;

            
        }

    }
    

    return (
        <div className="container">
            <div>
                <input type="text" name="name" placeholder="name" onChange={onChange} value={name} /> 
                <input type="number" name="age" placeholder="age" onChange={onChange} value={age} />
                <input type="text" name="email" placeholder="email" onChange={onChange} value={email} /> 
                <input type="text" name="role" placeholder="role" onChange={onChange} value={role} />
                <button name="submit" onClick={onChange} >Submit</button>
            </div>

        </div>
    )
}