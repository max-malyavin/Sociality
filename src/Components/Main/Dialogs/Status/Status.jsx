import React from 'react'
import classNames from 'classnames'
const Status = ({online}) => {
    return (
        <span className={classNames("status",{ 'status--online' : online})}>
           {online?  'онлайн' : 'офлайн'}
            </span>
    )
}

export default Status
