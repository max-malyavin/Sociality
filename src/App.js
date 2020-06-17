import React, { useEffect } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './Reducers/app-reducer';


const  App = ({initializeApp,initilized,isAuth,id}) => {


  useEffect(() => {
    initializeApp()
  },[]);

  if(!initilized) {
    return  <div id="cube-loader">
                <div className="caption">
                    <div className="cube-loader">
                      <div className="cube loader-1"></div>
                      <div className="cube loader-2"></div>
                      <div className="cube loader-4"></div>
                      <div className="cube loader-3"></div>
                    </div>
                </div>
            </div>
  }

  return (
    <>
        <Header />
            <Main isAuth={isAuth} id={id} initilized={initilized}/>
        <Footer/>
    </>
  );
}

const  mapStateToProps = (state) => {
  
  return {
      initilized: state.app.initialized,
      isAuth: state.auth.isAuth,
      id: state.auth.id,
  }
}

export default compose(withRouter,connect(mapStateToProps,{initializeApp,}))(App);

