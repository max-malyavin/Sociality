import React from 'react'
// import './Dialogs.scss'
import { connect } from 'react-redux'
import Message from './Message/Message'
import { sendMessage, updateNewPMessageBody } from '../../../Actions/Actions'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../../HOC/withAuthRedirect'
import { compose } from 'redux'



const Dialogs = ({dialogs, updateNewPMessageBody, sendMessage}) => {
    let dialogsElements = dialogs.map(d => <Message key={d.id} {...d}/>)

    return (
        <section>
                <div>
                    autors
                    <div>autor</div>
                </div>
                <div className='messages'>
                    {dialogsElements}
                </div>
        </section>  
    )
}

const  mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogsData,
    }
}

export default compose(
    connect(mapStateToProps,{
        updateNewPMessageBody,
        sendMessage}),
    withAuthRedirect,
)(Dialogs)






