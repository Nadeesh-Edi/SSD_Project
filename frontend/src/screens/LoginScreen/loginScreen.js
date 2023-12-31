import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userAction'
import { Row, Col } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'


const LoginScreen = ({ location, history }) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userLogin

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])
     
      const submitHandler = async (e) => {
            e.preventDefault()
            try {
                  let result = await signInWithEmailAndPassword(auth, email, password);
                  if(result.user?.uid){
                        console.log(result.user);
                        dispatch(login(email, password))
                  }
            } catch (err) {
                  console.error(err);
            }
      }


      return (
            <>
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">

                                    <div class="col-md-6 d-none d-md-flex bg-image"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="login d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <h3 class="display-4">LOG IN!</h3><br/>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}
                                                                  <form onSubmit={submitHandler} >
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputPassword" type="password" placeholder="Password" required=""  value={password} onChange={(e) => setPassword(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                                        </div>
                                                                        <div class="custom-control custom-checkbox mb-3">
                                                                              <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                                              <label for="customCheck1" class="custom-control-label">Remember password</label>
                                                                        </div>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                                                        <div class="text-center d-flex justify-content-between mt-4"><p>New Customer? <a href="/signup" class="font-italic text-muted">
                                                                              <u>Register Now</u></a></p></div>
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                 
            </>
      )
}

export default LoginScreen