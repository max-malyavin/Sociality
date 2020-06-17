// , { useEffect }
import React from 'react'
import './Users.scss'
import UserPhoto from '../../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {  Card, Avatar  } from 'antd'

const { Meta } = Card;
const User = ({id,photos,status,name, followed, follow, unfollow,followingInProgress,auth:{isAuth}}) => {

    const Unfollow = () => {
        unfollow(id)
    }
    const Follow = () => {
        follow(id)
    }
    const validateName = (login) => {
        return `${login.slice(0,1)}${login.length > 20
           ? `${login.slice(1,20)}...` 
           : login.slice(1)}` 
       }
   
    return (
    <div style={{marginBottom: '30px', paddingRight: '20px', paddingLeft: '20px'}}>
            <Card  style={{ width: 250 }} hoverable>
            <Meta
            avatar={<Avatar 
                style={{height: 'auto'}}
            src={photos.small != null ? photos.small : UserPhoto}  />}
            title={validateName(name)}
            description={<div>
                <NavLink to={'/users/' + id} className="check__profile">Посмотреть профиль</NavLink>
                <div style={{marginTop: '15px'}}>
                {isAuth && <button style={{cursor: 'pointer'}} disabled={followingInProgress.some(ide => ide === id)}
                    onClick={followed ? Unfollow : Follow}>
                     {followed ? 'Отписаться' : 'Подписаться'}
                    </button> }
                </div>
            </div>}/>
           </Card>
    </div>
    )
}
const  mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps,null)(User);

//  <span>
// <div title={name}>
//     <NavLink to={'/profile/' + id}>
//         <img style={{width: '50px'}} 
//          src={photos.small != null ? photos.small : UserPhoto} 
//          alt=""/>
//     </NavLink>
// </div>
//     <div>
// {isAuth && <button
// disabled={followingInProgress.some(ide => ide === id)}
// onClick={followed ? Unfollow : Follow}>
//     {followed ? 'unfollow' : 'follow'}
// </button> }
//     </div>
//     <div>
//     </div>
// </span>
// <span>
// <span>
//     <div title={name}>{validateName(name)}</div>
//     <div>{status}</div>
// </span>
// </span> 
