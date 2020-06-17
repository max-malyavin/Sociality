import React, { useState } from 'react'
import { SmileOutlined ,SendOutlined,CameraOutlined,AudioOutlined} from '@ant-design/icons';
import { Input} from 'antd';
import './Profile.scss'
import { UploadField} from '@navjobs/upload'
import { Field } from 'redux-form';
import { InputMy } from './Input';

const PostInput = (props) => {

    return (
        <form className='post-input' onSubmit={props.handleSubmit}>
             <div className='chat-input__smile-btn'>
                 <SmileOutlined />
             </div>

             <Field component={InputMy}
            // validate={[requiredField,maxLength]}
            name={'newPostText'} 
            placeholder='Введите текст' />
            {/* <Input name='newPostText' onKeyUp={props.onSendMessage} 
             placeholder="Введите текст" size='large'/> */}

               <div className="chat-input__actions">
                <UploadField 
                    containerProps={{className: 'photos'}}
                    uploadProps={{accept: '.jpg,.jpeg,.png',
                    multiple: 'multiple'}}
                    onFiles={files=>console.log(files)}>
                    <CameraOutlined /> 
                </UploadField>
                     <button className='btn__post'><SendOutlined /> </button>
                 </div> 

        </form>
    )
}



export default PostInput
