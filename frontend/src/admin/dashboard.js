import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import {MetaData} from '../layout/MetaData'
import Loader from '../layout/loader'
import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'

// import { getAdminProducts } from '../actions/productActions'
// import { allOrders } from '../actions/orderAction'
// import { allUsers } from '../actions/userAction'

const Dashboard = () => {

    const dispatch = useDispatch();

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

    return (
        <Fragment>
                <div class="bag" >
        <div class="bag_left" >
            <div class="left_content">
                <ul>
                    <a class="action_list">
                        Caregivers
                    </a>
                    <a class="action_list">
                        Users
                    </a>
                    <a class="action_list">
                        Bookings
                    </a>
                    <a class="action_list">
                        clients
                    </a>
                </ul>
            </div>
        </div>

        <div class="right">

     
            <div class="right_top">
                <div class="right_top_content">
                    <div class="content_left">
                        <h2 class="amount">
                            200
                        </h2>
                        <p class="content">
                            Caregivers
                        </p>
                    </div>
                    <div class="content_right">
                        <img src="./assets/icons8-nurse-48.png" />
                    </div>
                </div>

                <div class="right_top_content">
                    <div class="content_left">
                        <h2 class="amount">
                            200
                        </h2>
                        <p class="content">
                            Users
                        </p>
                    </div>
                    <div class="content_right">
                        <img src="./assets/icons8-users-48.png" />
                    </div>
                </div>

                
                <div class="right_top_content">
                    <div class="content_left">
                        <h2 class="amount">
                            200
                        </h2>
                        <p class="content">
                            Bookings
                        </p>
                    </div>
                    <div class="content_right">
                        <img src="./assets/icons8-planner-48.png" />
                    </div>
                </div>

                <div class="right_top_content">
                    <div class="content_left">
                        <h2 class="amount">
                            200
                        </h2>
                        <p class="content">
                            WaitList
                        </p>
                    </div>
                    <div class="content_right">
                        <img src="./assets/icons8-planner-48.png" />
                    </div>
                </div>

            </div> 



            
            <div class="right_bottom" >
                <div class="bottom_content">
                    <div class="bottom_content_top">
                        <h4>Recent Payment</h4>
                        <a href="">View All</a>
                    </div>

                    <div class="bottom_content_bottom">
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
                                <td>Berglunds snabbköp</td>
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
