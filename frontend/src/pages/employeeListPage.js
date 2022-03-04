import {useState , useEffect} from 'react' ;
import { useDispatch ,useSelector } from 'react-redux';
import { employeeList } from '../action/employeesAciton';
import LogIn from './authPages/login' ;

export default function () {
    const {loading , data} = useSelector(state => state.employeeList)

    
    const dispatch = useDispatch() ;

    

    useEffect(() => { 
        // console.log(loading)
        // console.log(data) ;

         dispatch(employeeList()) ;


    }, [dispatch]) ;

   if(data){
    console.log(data[0].name) ;
   } 

    return (
        //  <div></div>
        <div>
            This is Kare givers List
        <ul>
            {/* {data[0].name} */}

            { 
               data?(

                   data.map(d => {
                        return <LogIn key = {d._id} D = {d.name} /> 
                    })
               ) : (<div></div>)
            }
        </ul>
        </div>
        
    )
}