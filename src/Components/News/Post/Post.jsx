import React from 'react'
import './Post.scss'

const Post = ({title}) => {
    return (
        <div className='news__post'>
            <div className="news__post-image">
                <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/202/202155706.jpg" alt=""/>
            </div>
            <div className="news__post-info">
                     <h2 className="news__post-info-text">
                        {title}
                     </h2>
                     <p className="news__post-info-desc">
                         1
                     </p>
            </div>
        </div>
    )
}

export default Post
