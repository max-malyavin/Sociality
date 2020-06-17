import React, { useState } from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../Assets/Images/user.png'
import { Field, reduxForm } from 'redux-form'
import { Input, Checkbox } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './ProfileInfo.scss'
import { UploadOutlined } from '@ant-design/icons';
import { List, Avatar } from 'antd';

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile,user}) => {


    const [editMode, setEditMode] = useState(false)

 

    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })
    }


    const onMainPhotoSelected =(e)=> {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className="profile__user" style={{paddingRight: '70px'}} >
            <div style={{borderRight: '1px solid #ccc'}}>
            <ProfileStatus
             user={user}

            updateStatus={updateStatus}
            profile={profile}
            status={status}/>
            <div>

                <div className="avatar-upload">
         <div className="avatar-edit">
             <input type='file' onChange={onMainPhotoSelected} id="imageUpload" accept=".png, .jpg, .jpeg" />
             {/* <label><UploadOutlined for="imageUpload"/></label> */}
              <label htmlFor="imageUpload"><UploadOutlined/></label>
         </div>
            <div className="avatar-preview">
                <div id="imagePreview" 
                style={{backgroundImage: `url(${profile.photos.large || userPhoto})`}}>
                 </div>
            </div>
            </div>

                {/* <input type={"file"} onChange={onMainPhotoSelected}/> */}
            </div>

            {editMode ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} profile={profile}/> 
            :  <ProfileData isOwner={isOwner} toEditMode={()=> setEditMode(true)} profile={profile}/>}
             {/* <div className="profile__user">
                <ProfileStatus
                 updateStatus={updateStatus}
                statuswho={statuswho}
                status={status} profile={profile}/>
            <div>
                <img src={userPhoto} alt=""/>
            </div>
            </div> */}

</div>
        </div>
    )
}





const Contact = ({contactsTitle, contactValue}) => {
     return <div>{contactsTitle} : <span style={{fontWeight: '700'}}>{contactValue ? contactValue : '---'}</span></div>
}
    
const ProfileData =({profile,isOwner, toEditMode}) => {

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
   
    return (
        <div>
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
   {isOwner && <div>
       <button style={{cursor: 'pointer'}} onClick={toEditMode}>Редактировать</button>
   </div>
   }
        </div>
    )
}



const ProfileDataForm =({profile, handleSubmit,error}) => {
   
    const dataTitle = [
        {title: 'Полное имя', payload: <Field style={{border: 'none', borderBottom: '1px solid black', background: 'transparent'}} placeholder={'Полное имя'} name={'fullName'} component={'input'}/>},
        { title: 'Ищу работу', payload: <span><Field name={'lookingForAJob'} component={'input'} type="checkbox"/></span>
    },
        { title: 'Профессиональные скиллы', payload: <Field placeholder={'Профессиональные скиллы'} name={'lookingForAJobDescription'} component={'textarea'}/>
    },
        { title: 'Обо мне', payload: <Field style={{border: 'none', borderBottom: '1px solid black', background: 'transparent'}}  placeholder={'Обо мне'} name={'aboutMe'} component={'input'}/>
    },
        { title: 'Контакты', payload: Object.keys(profile.contacts).map(key=>{
            return <ContactEdit key={key} contactsTitle={key} contactValue={profile.contacts[key]
            }/>
            })
    },
    ];
    
    return (
    <form onSubmit={handleSubmit}>
         <List itemLayout="horizontal"
    dataSource={dataTitle}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<span>{item.title}</span>}
          description={<span >{item.payload}</span>}
        />
      </List.Item>
            )} />

            <button>Сохранить изменения</button>
            {error && <div>{error}</div>}
     </form>
    )
}
const ProfileDataFormRedux = reduxForm({form: 'editprofile'})(ProfileDataForm)


export default ProfileInfo


function ContactEdit ({contactsTitle, contactValue}) {
    return <div>{contactsTitle} : 
    <Field  placeholder={`${contactsTitle}`} name={`contacts.${contactsTitle}`} component={'input'} style={{ marginLeft: '10px', marginBottom: '5px',border: 'none', borderBottom: '1px solid black', background: 'transparent'}}>
    </Field>
    </div>
}


