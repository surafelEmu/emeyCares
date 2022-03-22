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

    const { data } = useSelector(state => state.employeeList)
    const { Userdata } = useSelector(state => state.users)
    const { orders, totalAmount, loading } = useSelector(state => state.booking)

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
                    <a className="action_list">
                        Users
                    </a>
                    <a className="action_list">
                        Bookings
                    </a>
                    <a className="action_list">
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
                </div>
            </div>

        </div>
    
    </div>
 </Fragment >
    )
}

export default Dashboard
