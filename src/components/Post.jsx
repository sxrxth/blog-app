import React from 'react'
import "./post.css"
import { BASE_URL } from '../services/baseURL'
import { Link } from 'react-router-dom'

function Post({post}) {
  return (
   <Link style={{textDecoration:"none"}} to={`/singlePost/${post._id}`}>
      <div className="post">
     <img className='postImg' width={"100%"} src={`${BASE_URL}/uploads/${post?.image}`} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              {post.categories
  }
          </span>
         
        </div>
        <span className="postTitle">
            {post.title}
          
        </span>
        <hr />
        {/* <span className="postDate">1 hour ago</span> */}
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
   </Link>
  )
}

export default Post


