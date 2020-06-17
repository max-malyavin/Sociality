import React from 'react'
import './Button.scss'
import classnames from 'classnames'

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classnames('button-plan')}>
            {children}
        </button>
    )
}                                               

export default Button
