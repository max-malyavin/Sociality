import React from 'react'
import Post from './Post/Post'
import posts from './Posts.json'
import './News.scss'
import Covid from './Covid/Covid'

const News = () => {
    return (
        <div style={{margin: '30px 0px 30px 0px', display: 'flex', justifyContent: 'space-beetwen'}}>
            {/* <div style={{width: '40%'}}>{posts.map((item, key) => {
                return <Post ket={key} title={item.title} />
            })}</div> */}
            <div style={{width: '100%'}}>    
                <Covid/>
            </div>
        </div>
    )
}

export default News
