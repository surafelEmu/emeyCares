
import { useEffect } from 'react';
import {loadServices} from './action/servicesAction' ;
import {useDispatch , useSelector} from 'react-redux'

import Home from './pages/home/home' ;
import Login from './pages/authPages/signup'
import EmployeeList from './pages/employeeListPage'
import {employeeList} from './action/employeesAciton'
function App() {

  const dispatch = useDispatch() ;
  useEffect(() => {
   // dispatch(employeeList()) ;
  })

  return (
    <EmployeeList /> 
  );
}

export default App;
