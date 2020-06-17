import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';

import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import './Post.scss'
import userPhoto from '../../../Assets/Images/user.png'
import classNames from 'classnames';
import { Card } from 'antd';
const Post = ({text,myavatar,likes, profile,addLike,id,myLike,disLike,loginName}) => {

   
    const [action, setAction] = useState(null);
  
    const like = () => {
        myLike ? disLike(id): addLike(id) && setAction('liked')
      };

      const actions = [
        <span key="comment-basic-like">
            <span  onClick={like} >
          <Tooltip title="Like">
            {createElement( myLike ? LikeFilled : LikeOutlined & action === 'liked' ? LikeFilled : LikeOutlined)}
          </Tooltip>
          <span className="comment-action">{likes}</span>
          </span>
        </span>,
        // <span key="comment-basic-dislike">
        //      <span  onClick={dislike} >
        //   <Tooltip title="Dislike">
        //     {React.createElement(action === 'disliked' && myLike? DislikeFilled : DislikeOutlined,)}
        //   </Tooltip>
        //   <span className="comment-action">{0}</span>
        //   </span>
        // </span>
        ,
      ];

    return (
        <Card style={{marginBottom: '25px'}} hoverable >
         <Comment actions={actions}
         author={<a>{loginName}</a>}
         avatar={ <Avatar src={myavatar.large || userPhoto} alt={loginName}/> }
        content={<p>{text}</p>}
         />
      </Card>
    )
}



export default Post

 // <div className={classNames('posts', {
//     'posts__mylike': myLike,
 // })}>   
//   { <img src={myavatar.large || userPhoto} style={{width: '50px'}} alt=""/> }
 //  {text}
//  <div className='posts__like' onClick={like}>like { likes}</div>
// </div>
// const like = (e) => {
//     myLike ? disLike(id):addLike(id)
// }
        
 // const dislike = () => {
 //     myLike ? addLike(id) : disLike(id) && setAction('disliked')
 //   };