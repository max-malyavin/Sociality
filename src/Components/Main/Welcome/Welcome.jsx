import React from 'react'
import './Welcome.scss'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome__title'>Добро пожаловать!</div>
            <div className='welcome__text'>Вы сейчас находитесь в режиме гостя.</div>
            <div className='welcome__warning'>Функционал ограничен! Войдите в аккаунт.</div>
            <NavLink to={'/login'} className="welcome__login">Войти</NavLink>
        </div>
    )
}

export default Welcome
