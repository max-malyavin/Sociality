import React, { useState, useEffect } from 'react'
import userPhoto from '../../../../Assets/Images/user.png'
import '../../Profile/ProfileInfo.scss'
import { NotificationOutlined }  from '@ant-design/icons';
import { Badge } from 'antd';

const ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
     } , [props.status] )


    return (
        <div> 
            <span style={{marginRight: '10px',
        fontWeight: '700'}}><span style={{marginRight: '7px'}}>Статус</span>
        <Badge dot={props.status? 'dot' : null}>
        <NotificationOutlined />
         </Badge>
         </span>
 
        <span className="status" >{status ? status : '----'}</span>   
        </div>
    )
}


const AnotherProfileInfo = ({profile,status}) => {

    return (
        <div className="profile__user">
            <div >
            <ProfileStatus
                profile={profile}
                 status={status}/>
            <div>

                <div className="avatar-upload">
            <div className="avatar-preview">
                <div id="imagePreview" 
                style={{backgroundImage: `url(${profile.photos.large || userPhoto})`}}>
                 </div>
            </div>
            </div>
            </div>

            </div>
        </div>
    )
}
export default AnotherProfileInfo

