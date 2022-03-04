
import { useEffect } from 'react';
import {loadServices} from './action/servicesAction' ;
import {useDispatch , useSelector} from 'react-redux'

import Home from './pages/home/home' ;
import Signup from './pages/authPages/signup'
import Login from './pages/authPages/login'
import EmployeeList from './pages/employeeListPage'
import {employeeList} from './action/employeesAciton'
import AddEmployeePage from './pages/addEmployeePage';

function App() {

  const dispatch = useDispatch() ;
  useEffect(() => {
   // dispatch(employeeList()) ;
  })

  return (
    <div>
     <EmployeeList /> 
    {/* < Signup />  */}
    {/* < Login />  */}

    </div>
   
  );
}

export default App;
