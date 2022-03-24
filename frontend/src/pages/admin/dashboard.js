import React, { Fragment, useEffect , useState } from 'react'
// import { Link } from 'react-router-dom';

// import {MetaData} from '../layout/MetaData'
// import Loader from '../layout/loader'
// import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'

// import { getAdminProducts } from '../actions/productActions'
// import { allOrders } from '../actions/orderAction'
// import { allUsers } from '../actions/userAction'

import './admin.css'
const Dashboard = () => {

    const dispatch = useDispatch();
    const pointer = useState(1) ;

    // const { data } = useSelector(state => state.employeeList)
    const { Userdata } = useSelector(state => state.users)
    const { orders, totalAmount, loading } = useSelector(state => state.booking)




    const [data , setData] = useState({
        firstName: '' ,
        lastName: '' ,
        gender: '' ,
        dateofBirth: '' ,
        city: '' ,
        subCity: '' ,
        street: '' ,
        phone: ''
    })


    const {firstName , lastName , gender , dateofBirth , city ,
                subCity , street , phone} = data ;



    let outOfStock = 0;
    // products.forEach(product => {
    //     if (product.stock === 0) {
    //         outOfStock += 1;
    //     }
    // })

    useEffect(() => {
        // dispatch(getAdminProducts())
        // dispatch(allOrders())
        // dispatch(allUsers())
    }, [dispatch])


    onchange = (e) =>  {
        if(e.target.className == 'action_list') {
            console.log(e.target.innerHTML)
            if(e.target.innerHTML == 'Add Caregivers') {
                console.log('adding caregivers')
            }
            console.log('clicked') ;
        }
    }

    return (
        <Fragment>
    <div className="bag" >
        <div className="bag_left" >
            <div className="left_content">
                <ul>
                    <a onClick={onchange} className="action_list">
                        Caregivers
                    </a>
                    <a onClick={onchange} className="action_list">
                        Add Caregivers
                    </a>
                    <a onClick={onchange} className="action_list">
                        Users
                    </a>
                    <a onClick={onchange} className="action_list">
                        Bookings
                    </a>
                    <a onClick={onchange} className="action_list">
                        clients
                    </a>
                </ul>
            </div>
        </div>

        <div className="right">

     
            <div className="right_top">
                <div className="right_top_content">
                    <div className="content_left">
                        <h2 className="amount">
                            200
                        </h2>
                        <p className="content">
                            Caregivers
                        </p>
                    </div>
                    <div className="content_right">
                        <img src="./assets/icons/icons8-nurse-48.png" />
                    </div>
                </div>

                <div className="right_top_content">
                    <div className="content_left">
                        <h2 className="amount">
                            200
                        </h2>
                        <p className="content">
                            Users
                        </p>
                    </div>
                    <div className="content_right">
                        <img src="./assets/icons/icons8-users-48.png" />
                    </div>
                </div>

                
                <div className="right_top_content">
                    <div className="content_left">
                        <h2 className="amount">
                            200
                        </h2>
                        <p className="content">
                            Bookings
                        </p>
                    </div>
                    <div className="content_right">
                        <img src="./assets/icons/icons8-planner-48.png" />
                    </div>
                </div>

                <div className="right_top_content">
                    <div className="content_left">
                        <h2 className="amount">
                            200
                        </h2>
                        <p className="content">
                            WaitList
                        </p>
                    </div>
                    <div className="content_right">
                        <img src="./assets/icons/icons8-planner-48.png" />
                    </div>
                </div>

            </div> 



            <div className="searchField">

                    <h4>Recent Payment</h4>
                <div>

                <img src="./assets/icons/icons8-search-50.png" /> 
                <input type="text" placeholder="Search by Name"/>
                </div>
            </div>

            
            <div className="right_bottom" >
                <div className="bottom_content">
                    {/* <div className="bottom_content_top">
                        <a href="">View All</a>
                    </div> */}

                    <div className="bottom_content_bottom">
                        <table>
                            <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                              </tr>
                              <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                              </tr>
                              <tr>
                                <td>Berglund
                                    s snabbköp</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                              </tr>
                              <tr>

                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr>
                              <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr> <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr>
                        </table>
                    </div>


                    <div className="container personal_Info oneC on" id="oneC">
                <div className="container_left">
                
                <h4>Full Name</h4>

                <div className="name_container">
                    <input value={firstName} className="firstName" onChange={onchange} id="Name_f" type="text" placeholder="First Name" />
                    <input value={lastName} className="lastName" onChange={onchange} id="Name_l" type="text" placeholder="Last Name" />
                </div>
                 <div className="gender_and_Dbirth">
                {/*   
                <div className="dropdown">
                    <button onClick="myFunction()" className="dropbtn">Gender</button>
                    <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Male</a>
                    <a href="#about">Female</a>
                    </div>
                </div> */}
                
                <div className="dateofBirth">
                <small>Date of Birth</small>
                <input  className="birthDate" onChange={onchange} id="gb_birth"  placeholder="Date of Birth" type="date" onfocus="{this.type='date'}" />
                </div>
                
            </div>
                
                <div className="address">
                    <h4>Address</h4>
                    <div>

                        <input value={city} className="city" onChange={onchange} id="address_city" type="text" placeholder="City" />
                        <input value={subCity} className="subCity" onChange={onchange} id="address_subCity" type="text" placeholder="SubCity" />
                        <input value={street} className="street" onChange={onchange} id="address_street" type="text" placeholder="Street Address" />
                        <input value={phone} className="phone" onChange={onchange} id="address_phone" type="number" placeholder="Phone Number" /> 
                    </div>
                </div>

                
            </div>

      
    
            <div className="container_right">
                      
                <div className="inner_container ">
                    <h4 className="top">Past and present medical problems</h4>
                    <textarea className="right medical" />

                   
                </div>

                <div className="inner_container">
                    <h4 className="top">How may We help</h4>
                    <textarea className="right help"/>

                   
                </div>

                <div className="fill">

                </div>
            </div>
    
        </div>





                </div>
            </div>

        </div>
    
    </div>
 </Fragment >
    )
}

export default Dashboard
