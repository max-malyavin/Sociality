import React, { useState, useEffect } from 'react'
import { Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
const ProfileStatus = (props) => {

    // const statuser = props.statuswho ? true : false
    let [editMode, setEditMode] = useState(true);
    let [status, setStatus] = useState(props.status);


    useEffect(()=> {
        setStatus(props.status)
     } , [props.status] )


    const activateEditMode = () => {
        setEditMode(!true)
    }
    const deactivateEditMode =()=> {
         setEditMode(!false);
         props.updateStatus(status)
    }
    

    const onStatusChange = (e) => {
         setStatus(e.currentTarget.value)
    }
    // const statuswho = props.statuswho ? props.statuswho.length : null
    return (
        <div> 
            <span style={{marginRight: '10px',
        fontWeight: '700'}}><span style={{marginRight: '7px'}}>Статус</span>
        <Badge dot={props.status? 'dot' : null}>
        <NotificationOutlined />
      </Badge></span>
            {editMode 
            ? <span className="status" onClick={activateEditMode} >{status}</span>
            :<span>
               <input autoFocus={true} onChange={onStatusChange} 
                onBlur={ deactivateEditMode }
                type="text" value={status}/>
            </span>
            }      
        </div>
    )
}

export default ProfileStatus


{/* {!props.profile && <span className="status" onClick={ statuser && null} >{status || statuser ? "----" : 'Я - Гость!'}</span>} */}
{/* {props.profile && <span className="status" onClick={ !statuswho && null} >{status || props.statuswho ? "----" : 'Я - Гость!'}</span>}
{/* {props.profile && <span className="status" onClick={props.profile && !statuser ? activateEditMode: null} >{status || !statuser ? (props.profile.userId == props.user ?  'Я - Гость!' : status   ) : '----'}</span>} */} 