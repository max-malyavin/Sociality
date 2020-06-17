// createRef, useState, useReducer,
import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import MyPost from './MyPost'
// updateNewPostText,
import {  addPost } from '../../../Actions/Actions'
import ProfileInfo from './ProfileInfo'
import { withRouter } from 'react-router-dom'
import {getUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile} from '../../../ThunkCreator/ThunkCreator'
import './Profile.scss';


const Profile = ({profile: {posts,profile,status},authorizedUserId,user, isAuth,addPost,
    getUserProfileThunk,
    getStatus,
    updateStatus,savePhoto,saveProfile,
    match,history}) => {
      
        let userId = match.params.userId
        useEffect(() => {
            let userId = match.params.userId
            if(!userId){
                userId = authorizedUserId
                if(!userId){
                    // history.push('/login')
                }
            }
            getUserProfileThunk(userId)
            getStatus(userId)
        },[match.params.userId]);


    return (
        <section className='profile'>
            <ProfileInfo profile={profile} saveProfile={saveProfile}
            updateStatus={updateStatus}
            statuswho={userId}
            user={user}
            isOwner={!match.params.userId}
            savePhoto={savePhoto}
            status={status}/>



            {isAuth ? <>
                {userId ?  <div className='profile__post  post__users'>Посты других пользователей ещё не реализовано!</div>:   <MyPost
                        addPost={addPost}
                        posts = {posts}
                    />}
                  
             </>
             : <div className='profile__post restriction'>
                 Функционал органичен! Войдите в аккаунт.
               </div>}
        </section>
    )
}

const  mapStateToProps = (state) => {
    return {
        profile: state.profile,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        user: state.auth.id
    }
}


export default connect(mapStateToProps,{
    addPost,
    getUserProfileThunk,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
})(withRouter(Profile));






