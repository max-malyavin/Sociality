import React from 'react'
// import Time from '../../Time/Time'
import TextReaded from '../../TextReaded/TextReaded'
import './DialogsItem.scss'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import Time from '../../Time/Time'

const getMessageTime = (created_at)=>  {
    if(isToday(created_at)){
        return format(created_at, 'HH:mm')
    } else {
        return format(created_at, 'dd.MM.yyyy')
    }
}






const DialogItem = ({_id,user,unreaded,currentDialog,message, isMe, onSelect}) => {

    return (
       <div  onClick={e => onSelect(_id)} className={classNames('dialogs__item',
        {'dialogs__item-online': message.user.isOnline,
            'dialogs__item--selected': currentDialog === _id
        })}>
           <div className="dialogs__item-avatar">
                 <img src={message.user.avatar} alt={`${message.user.fullname} avatar`}/>
           </div>
           <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{message.user.fullname}</b>
                    <span>
                       { getMessageTime(message.created_at) || 'time'}
                        {/* <Time date={new Date() - 10000}/> */}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{message.text}</p>

                    {isMe && <TextReaded isMe={true} isReaded={false}/>}

                   {unreaded > 0 && <div className="dialogs__item-info-bottom-count">
                        {unreaded > 9 ? '+9': unreaded}
                    </div>}
                </div>
           </div>
       </div> 
    )
}

export default DialogItem
