import React, { useEffect, useRef } from 'react'
import { Empty } from 'antd'
import Message2 from './Message2'
import { connect } from 'react-redux'
import { setMessages } from '../../../Actions/Actions'
import { fetachMessages } from '../../../ThunkCreator/ThunkCreator'
import { Spin,  } from 'antd';


const Messages = ({isLoading,fetachMessages,items, currentDialogID}) => {

  const messagesRef = useRef(null)

  useEffect(() => {
      console.log(messagesRef);
      messagesRef.current.scrollTo(0,9999)
  }, [items])

    useEffect(() => {
      if(currentDialogID){
        fetachMessages(currentDialogID)
      }
        
        
    },[currentDialogID])

    return <div ref={messagesRef} className="chat__dialog-messages">
      {
      isLoading  
      ? ( <Spin size='large' tip="Loading..."></Spin>)
      : items && !isLoading ? (items.length > 0 ? (
        items.map(item=>{ 
          return item.messages.map(items => <Message2 isLoading={isLoading}{...items} user={item.user} key={items._id}  id={items._id}/>) })) 
      : (<Empty description='Диалог пуст'/>)) : (<Empty description='Выберите диалог'/>)
     }
  </div>

}



const  mapStateToProps = (state) => {
    return {
        items: state.messagesDialog.items,
        currentDialogID: state.messages.currentDialog,
        isLoading: state.messagesDialog.isLoading
    }
}
export default connect( mapStateToProps,{ fetachMessages,setMessages})(Messages);

