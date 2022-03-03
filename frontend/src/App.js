
import { useEffect } from 'react';
import {loadServices} from './action/servicesAction' ;
import {useDispatch , useSelector} from 'react-redux'

import Home from './pages/home/home' ;
import Login from './pages/authPages/signup'


function App() {

  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(loadServices('This is from app.js')) ;
  })

  return (
    <Login />
  );
}

export default App;
