import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import UserRoomBookimgs from '../UserRoomBookings/userRoomBookings';
import { auth } from '../../firebase';
import useAuthentication from '../../useAuthentication';
import axios from 'axios';

// import UserFoodOrders from '../UserFoodOrders/UserFoodOrders';

const { TabPane } = Tabs;

const UserProfile = () => {
      const authUser = useAuthentication();
      const [userData, setUserData] = useState({
            contactNo: "",
            email: "",
            gender: "",
            isAdmin: false,
            name: "",
            nic: "",
            _id: ""
      });

      async function fetchData(){
            let idToken = await auth?.currentUser.getIdToken(true);
            const config = {
                  headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${idToken}`,
                  },
            }

            const { data } = await axios.get(`/api/users/profile`, config)
            //console.log(data);
            setUserData(data)
      }
      
      useEffect(() => {
            if(authUser){
                  fetchData()
            }
      },[authUser]);

      return (
            <>
                  <Container>

                        <div className="ml-3">
                              <h2 className="text-center m-2" style={{ fontSize: "35px" }}>User Profile</h2>
                              <Row className='align-items-center'>
                                    <Col className='text-right'>

                                    </Col>
                              </Row>
                              <Tabs defaultActiveKey="1">
                                    <TabPane tab="USER INFORMATION" key="1">
                                          {authUser === undefined ? (
                                                <div className="row">
                                                      <h1>Loading...</h1>
                                                </div>
                                          ):(
                                                <div className="row">

                                                      <h1>Name : {userData.name}</h1>
                                                      <h1>NIC : {userData.nic}</h1>
                                                      <h1>Gender : {userData.gender}</h1>
                                                      <h1>Contact No : {userData.contactNo}</h1>
                                                      <h1>Email : {userData.email}</h1>
                                                </div>
                                          )}
                                    </TabPane>
                                    <TabPane tab="ROOM BOOKINGS" key="2">
                                          <div className="row">

                                                <UserRoomBookimgs />
                                          </div>
                                    </TabPane>
                              </Tabs>
                        </div>
                  </Container >
                  <br/>
            </>
      )
}

export default UserProfile