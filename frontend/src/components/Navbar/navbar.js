import React from 'react'
import { logout } from '../../actions/userAction.js'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Navbar/hotellogo.png'
import '../Navbar/nav.css'
import Swal from 'sweetalert2'
import { auth } from '../../firebase.js'
import { signOut } from 'firebase/auth'

const Navbar = (history) => {

      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      const logoutHandler = async () => {
            await signOut(auth);
            dispatch(logout())
            Swal.fire('Successful', 'Successfully Logged Out ', 'success').then(result => {
                  window.location.href = '/login'
            })
      }

      return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
                  <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                              <img  src={logo} style={{ width: '100px', height: '40px' }}></img> CARLTON HOTEL</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav ml-auto">
                                    {userInfo ? (
                                          <NavDropdown className="link" title={userInfo.name} id='username'>

                                                <LinkContainer to="/profile">
                                                      <NavDropdown.Item class="link-dark">Profile</NavDropdown.Item>
                                                </LinkContainer>
                                                <NavDropdown.Item onClick={logoutHandler}>
                                                      <li className="link">logout</li>
                                                </NavDropdown.Item>
                                          </NavDropdown>

                                    ) : <li class="nav-item">
                                          <a class="nav-link active" aria-current="page" href='/login'><i class="fa fa-user-circle" aria-hidden="true"></i> Login</a>

                                    </li>}


                                    {userInfo && userInfo.isAdmin && (
                                          <NavDropdown className="link" title='Admin'>
                                                <LinkContainer to="/roomManagement">
                                                      <NavDropdown.Item class="link-dark">Room Management</NavDropdown.Item>
                                                </LinkContainer>
                                          </NavDropdown>
                                    )
                                    }
                              </ul>
                        </div>
                  </div>
            </nav>
      )
}

export default Navbar