import React from 'react'

const Message = ({avatar,text}) => {
    let onSendMessageClick = ()=>{

    }
    let onNewMessageChanfe = ()=> {

    }

    return (
        <div className="message">
                <div className="message__avatar">
                        <img src={avatar} alt="user_avatar"/>
                </div>
                <div className="message__content">
                    <div className="message__bubble">
                        {text}
                    </div>
                    <span>Data 19/2023/2103021/</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>add</button>
                </div>
        </div>
    )
}

export default Message
