import React from 'react';
import './Navbar.scss';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = ({auth: {isAuth,id}, ...props}) => {
    return(
        <nav className="nav">
        <ul className="nav__menu">
          {isAuth && <li>
            <NavLink  to={"/id" + id}>Моя страница</NavLink>
            </li>}
          {isAuth && <li>
            <NavLink  to="/dialogs">Сообщения</NavLink>
            </li>}
         <li>
            <NavLink to="/plan">Планировщик</NavLink>
            </li>
          <li>
            <NavLink to="/users">Пользователи</NavLink>
            </li>
          <li>
            <NavLink to="/news">Новости</NavLink>
            </li>
        </ul>
      </nav>
    )
}


const  mapStateToProps = (state) => {
  return {
      auth: state.auth,
  }
}


export default connect(mapStateToProps,null)(Navbar);

