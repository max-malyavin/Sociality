import React, { useState } from 'react'
import { SmileOutlined ,SendOutlined,CameraOutlined,AudioOutlined} from '@ant-design/icons';
import './ChatInput.scss'
import { Input} from 'antd';
import { UploadField} from '@navjobs/upload'
import { connect } from 'react-redux';
import { addMessage } from '../../../Actions/Actions';
// import {Picker} from 'emoji-mart'


const ChatInput = (props) => {
    const [value, setValue] = useState("")
    return (
        <div className='chat-input'>
             <div className='chat-input__smile-btn'>
                 {/* <Picker set='emojione'/> */}
                 <SmileOutlined />
            </div>
            <Input onKeyUp={props.onSendMessage}  onChange={e => setValue(e.target.value)} placeholder="Введите текст" size='large'/>
                 <div className="chat-input__actions">
                    <UploadField 
                        containerProps={{className: 'photos'}}
                        uploadProps={{accept: '.jpg,.jpeg,.png',
                        multiple: 'multiple'}}
                        onFiles={files=>console.log(files)}>
                <CameraOutlined /> 
                </UploadField>
                { value ? <SendOutlined onClick={e=> props.addMessage('sdfsdf','5ed0f595a8beb33107f4a9ee')}/>  :  <AudioOutlined /> }
                 </div>
        </div>
    )
}
// const  mapStateToProps = (state) => {
//     return {
//         dialogs: state.messages
//     }
// }
export default connect( null,
    {
        addMessage
})(ChatInput);


