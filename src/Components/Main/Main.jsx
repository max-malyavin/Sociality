import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Redirect } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs2'
import Users from './Users/Users'
import Login from '../Login/LoginV2'
import RegisterForm from '../Login/RegisterForm'
import Welcome from './Welcome/Welcome'
import Plan from './Plan/Plan'
import News from '../News/News'
import MyProfile from './MyProfile/MyProfile'
import AnotherProfile from './AnotherProfile/AnotherProfile'


const Main = ({isAuth,id}) => {
   
    return (
        <main className='main'>
        <Navbar/>
       {!isAuth && <Route exact path="/" render= { () => <Welcome/> }/>}
       {isAuth && <Route path={`/`} render= { () => <><Redirect to={`/id${id}`}/></> }/>}
        <Route path={`/id${id}`} render= { () => <MyProfile/> }/>
        <Route path="/dialogs" render= { () => <Dialogs/> }/>
        <Route exact path="/users" render= { () => <Users/> }/>
        <Route exact path="/users/:userId" render= { () => <AnotherProfile/> }/>
        <Route path="/plan" render= { () => <Plan/> }/>
        <Route path="/login" render= { () => <Login/> }/>
        <Route path="/news" render= { () => <News/> }/>
        <Route path="/register" render= { () => <RegisterForm/> }/>
        {/* <Route path="/profile/:userId?" render= { () => <Profile/> }/> */}
      </main>
    )
}

export default Main


      