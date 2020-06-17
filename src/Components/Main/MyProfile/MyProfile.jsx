// import React, {  useEffect } from 'react'
// import { connect } from 'react-redux'
// import {  addPost } from '../../../Actions/Actions'
// import {getUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile} from '../../../ThunkCreator/ThunkCreator'
// import '../Profile/Profile.scss'
// import MyPost from '../Profile/MyPost'
// import ProfileInfo from '../Profile/ProfileInfo';


// function myProfile ({profile: {posts,profile,status},authorizedUserId,user, isAuth,addPost,
//     getUserProfileThunk,
//     getStatus,
//     updateStatus,savePhoto,saveProfile}) {
       

//         useEffect(() => {
//             let userId = profile
//             if(!userId){
//                 userId = authorizedUserId
//             }
//         },[profile]);

//     return (
//         <section className='profile'>
//             <ProfileInfo profile={profile} saveProfile={saveProfile}
//             updateStatus={updateStatus}
//             // statuswho={userId}
//             user={user}
//             // isOwner={!match.params.userId}
//             savePhoto={savePhoto}
//             status={status}/>

//             <MyPost addPost={addPost}
//                     posts = {posts} /> 
//         </section>
//     )
// }

// const  mapStateToProps = (state) => {
//     return {
//         profile: state.profile,
//         authorizedUserId: state.auth.id,
//         isAuth: state.auth.isAuth,
//         user: state.auth.id
//     }
// }



import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { addPost, addLike, disLike } from '../../../Actions/Actions';
import '../../../App.scss';
import '../Profile/Profile.scss'
import { getUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile } from '../../../ThunkCreator/ThunkCreator';
import MyPost from '../Profile/MyPost';
import ProfileInfo from '../Profile/ProfileInfo';

const MyProfile = ({profile:{posts,profile,status},user,
    addPost,
    getUserProfileThunk,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    addLike,
    disLike,
    loginName
}) => {
    useEffect(()=> {
        getUserProfileThunk(user)
        getStatus(user)
    },[])

    
  if(!profile) {
    return  <div className='profile'>
        <div id="cube-loader">
                <div className="caption">
                    <div className="cube-loader">
                      <div className="cube loader-1"></div>
                      <div className="cube loader-2"></div>
                      <div className="cube loader-4"></div>
                      <div className="cube loader-3"></div>
                    </div>
                </div>
            </div>
            </div>
  }
    return (
        <section className='profile'>
            <ProfileInfo
                profile={profile} saveProfile={saveProfile}
                updateStatus={updateStatus}
                user={user}
                isOwner={true}
                savePhoto={savePhoto}
                status={status}
            />
            <MyPost myavatar={profile.photos} addPost={addPost}
            posts = {posts}
            loginName={loginName}
            profile={profile}
            disLike={disLike}
            addLike={addLike}
                 />
        </section>
    )
}

const  mapStateToProps = (state) => {
    return {
        profile: state.profile,
        user: state.auth.id,
        loginName: state.auth.login
    }
}


export default connect(mapStateToProps,{
    addPost,
    getUserProfileThunk,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    disLike,
    addLike
})(MyProfile);

