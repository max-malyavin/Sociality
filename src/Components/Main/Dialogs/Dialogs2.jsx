import React from 'react';
import { TeamOutlined , FormOutlined} from '@ant-design/icons';
import './chat.scss'
import Status from './Status/Status';
import ChatInput from './ChatInput';
import DialogsC from './Containers/DialogsC';
import Messages from './Messages';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';


const Dialogs = ({items}) => {
    
    return (
        <section className='chat'>
            <div className="chat__sidebar">
                 <div className="chat__sidebar-header">
                      <div>
                          <TeamOutlined />
                          <span>Список диалогов</span>
                      </div>
                         <FormOutlined /> 
                 </div>
                 <div className="chat__sidebar-dialogs">
                    <DialogsC />
                 </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                        <div></div>
                       <div className="chat__dialog-header-center">
                                 <b className="chat__dialog-header-username">
                                {items && items[0].user.fullname}
                              </b>
                        <div className="chat__dialog-header-status">
                    {items &&  (items && items[0].user.isOnline ? <Status online={true}/> : <Status online={false}/>)}
                    </div>
                 </div>
            <div>Настройки</div>
               </div>
               <Messages/>                
               <div className="chat__dialog-input">
         <ChatInput/>
            </div>

            </div>
        </section>  
    )
}

const  mapStateToProps = (state) => {
      return {
        items: state.messagesDialog.items,
      }
  }
export default compose(connect(mapStateToProps,null),withAuthRedirect)(Dialogs)

