// { useState, useEffect }
import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux';
import {  logout } from '../../ThunkCreator/ThunkCreator';




type Props = {
    login: string,
    isAuth: boolean,
    logout: () => void,
}


const Header: React.FC<Props> = ({login, isAuth, logout}) => {
   
    const handleLogout = () =>{
            logout()
    }
    const validateLogin = (login:string) => {
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

const  mapStateToProps = (state:any) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{
    logout,
})(Header);

