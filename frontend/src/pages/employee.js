import {useState , useEffect} from 'react' ;
import { useDispatch ,useSelector } from 'react-redux';

import { employeeDetail , commentOnEmployee } from '../action/employeesAciton';

export default function({Emp}) {

    const [emp , setEmp] = useState({
        name: '' ,
        age: '' , 
        email: ''
    })

    const [comment , setComment] = useState() ;
    const [token , setToken] = useState() ;

    const {loading , empDetail} = useSelector(state => state.empDetail) ;
    const { data} = useSelector(state => state.signup) ;

    if(empDetail) {
        console.log(empDetail.data.name) ;

    }

    if(data) {
        console.log(data.token) ;
    //    setToken(data.token) ;
    }

    const {name , age , email } = emp ;

    const dispatch = useDispatch() ;
    function onChange(e) {

        e.preventDefault() ;
        console.log(e) ;
        if(e.target.name == 'submit') {
            dispatch(employeeDetail(e.target.id)) ;

            setEmp({
                name: empDetail.data.name ,
                email: empDetail.data.email ,
                email: empDetail.data.age
            })
        }else if(e.target.name == 'comment') {

            console.log('dispatching comment')

            dispatch(commentOnEmployee(
               
                {
                    type: 'caregiver' ,
                    type_id: e.target.id ,
                    comment: comment , 
                }
            ))
        }else if(e.target.name == 'commentArea') {
            setComment(e.target.value) ;
            console.log(comment)
        }

    }


    return (
        <body>
        <div>
            {Emp.name}
            <input id={Emp._id} type="button" name="submit" onClick={onChange} value="see Detail" />
        </div>

        <div>
            {name}
            {age}
            {email}
        </div>


        <div>
            <p>Leave a comment</p>

            <div>
                <textarea name="commentArea" type="text" onChange={onChange} value={comment} />
                <input id={Emp._id} name="comment" type="button" onClick={onChange} value='comment' />
            </div>
        </div>
        </body>
       
    )
}