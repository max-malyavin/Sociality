import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux';
import '../../../App.scss';
import '../Profile/Profile.scss'
import { getUserProfileThunk, getStatus } from '../../../ThunkCreator/ThunkCreator';
import { withRouter } from 'react-router-dom';
import AnotherProfileInfo from './AnotherProfileInfo/AnotherProfileInfo';
import { List } from 'antd';



const Contact = ({contactsTitle, contactValue}) => {
    return <div>{contactsTitle} : <span style={{fontWeight: '700'}}>{contactValue ? contactValue : '---'}</span></div>
}
   
const ProfileData =({profile}) => {
debugger
   const dataTitle = [
       {title: 'Полное имя', payload: profile.fullName},
       { title: 'Ищу работу', payload: profile.lookingForAJob ? 'Да': 'Нет'},
       { title: 'Профессиональные скиллы', payload: profile.lookingForAJobDescription},
       { title: 'Обо мне', payload: profile.aboutMe},
       { title: 'Контакты', payload: Object.keys(profile.contacts).map(key=>{
           return <Contact key={key} contactsTitle={key} contactValue={profile.contacts[key]
           }/>
           })
   },
   ];
  
   return (<div>
           <List itemLayout="horizontal"
   dataSource={dataTitle}
   renderItem={item => (
     <List.Item>
       <List.Item.Meta
         title={<span>{item.title}</span>}
         description={<span >{item.payload}</span>}
       />
     </List.Item>
   )}/>
       </div>
   )
}



const AnotherProfile = ({profile:{profile,status},user,
    getUserProfileThunk,
    getStatus,match
}) => {
    useEffect(() => {
        let userId = match.params.userId
        getUserProfileThunk(userId)
            getStatus(userId)
    },[match.params.userId]);
    
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
        <section className='profile' style={{justifyContent: 'center'}}>
            <AnotherProfileInfo
                profile={profile}
                status={status}
            />
            <div>
                <ProfileData profile={profile}/>
            </div>
           
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
    getUserProfileThunk,
    getStatus,
})(withRouter(AnotherProfile));

