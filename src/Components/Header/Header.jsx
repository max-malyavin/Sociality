// { useState, useEffect }
import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux';
import {  logout } from '../../ThunkCreator/ThunkCreator';

const Header = ({auth: {login, isAuth}, logout,getAuthUserData, ...props}) => {
   
    const handleLogout = (e) =>{
            logout()
    }
    const validateLogin = (login) => {
     return `${login.slice(0,1)}${login.length > 10 
        ? `${login.slice(1,10)}...` 
        : login.slice(1)}` 
    }

    return (
        <header className='header'>
              <div className="header__inner">
                  <div className="header__logo">
                      Malyavin
                  </div>
                  <div className="header__entry">
                    {   isAuth &&
                        <div className="header__info">
                            <div className="header__login-name">
                               Логин:
                            </div>
                            <div data-title={login.length >10 ? login : null} className="header__login">
                                {validateLogin(login)}
                                </div>
                        </div>
                     }
                     <div className='login-bar'>
                        {isAuth
                        ? <NavLink to={'/'} className="header__login"
                             onClick={handleLogout}>
                            Выйти
                          </NavLink>
                         : <NavLink to={'/login'} className="header__login">Войти</NavLink>}
                     </div>
                  </div>
              </div>
        </header>
    )
}

const  mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps,{
    logout,
})(Header);

