import React from 'react'
import Post from './Post'
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../../Utils/Validators/validators'
import { Textarea } from '../../../Utils/Common/FormsControls'
import PostInput from './PostInput'


const maxLength = maxLengthCreator(8)

const MyPost = ({posts, myavatar, addPost,addLike,disLike,profile,loginName}) => {

    let postsElements = posts.map((d,key) => <Post myavatar={myavatar}
     addLike={addLike} id={d.id}
      disLike={disLike}
      profile={profile}
      loginName={loginName}
     key={key}
      {...d}
         
         />)

    const addNewPost = (props) =>{
        props.newPostText && (addPost(props.newPostText) && (props.newPostText = ''))
    }
    return (
        <div className='profile__post'>
              <div className="profile__post-title">Мои посты</div>
              <AddPostFormRedux onSubmit={addNewPost}/>
              {/* <AddPostFormRedux onSubmit={addNewPost}/> */}
             <div className='profile__posts'>
                {postsElements}
             </div>
        </div>
    )
}

// const AddPostForm = ({handleSubmit}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field component={Textarea} 
//             validate={[requiredField,maxLength]}
//             name='newPostText' 
//             placeholder='Отправить сообщение' />
//             <button>Отправить</button>  
//         </form>
//     )
// }
// const AddPostFormRedux = reduxForm({form: 'postMessageForm'})(AddPostForm)
// ----------------------------------------------------
// const AddPostForm = ({handleSubmit}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field component={Textarea} 
//             validate={[requiredField,maxLength]}
//             name='newPostText' 
//             placeholder='Отправить сообщение' />
//             <button>Отправить</button>  
//         </form>
//     )
// }
const AddPostFormRedux = reduxForm({form: 'postMessageForm'})(PostInput)


export default MyPost
