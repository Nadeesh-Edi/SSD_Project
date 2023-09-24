import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar/navbar';
import LandingScreen from './screens/LandingScreen/landingScreen';
import LoginScreen from './screens/LoginScreen/loginScreen';
import SignupScreen from './screens/RegisterScreen/signupScreen';
import Nav1 from './components/Navbar/nav';
import Footer from './components/Footer/footer';
import RoomsScreen from './screens/RoomScreen/roomsScreen';
import BookingScreen from './screens/BookingScreen/bookingScreen';
import AboutScreen from './screens/AboutScreen/aboutScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import CreateRoomScreen from './screens/CreateRoomScreen/createRoomScreen';
import RoomUpdateScreen from './screens/RoomUpdateScreen/roomUpdateScreen';
import RoomManagementScreen from './screens/RoomManagementScreen/roomManagementScreen';
import RoomsListScreen from './screens/RoomsListScreen/roomsListScreen';
import BookingReportScreen from './screens/bookingReportScreen/bookingReportScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/about" component={AboutScreen} />
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/roombook/:roomid/:fromdate/:todate" component={BookingScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/room/:id" component={ViewRoomScreen} />
        <Route path="/admin/createRoom" component={CreateRoomScreen} />
        <Route path="/update/:id" component={RoomUpdateScreen} />
        <Route path="/roomManagement" component={RoomManagementScreen} />
        <Route path="/listAllRooms" component={RoomsListScreen} />
        <Route path="/bookingreport" component={BookingReportScreen} />

      </div>
      <Footer />
    </Router>
  );
}

export default App;
