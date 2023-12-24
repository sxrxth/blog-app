import React, { useEffect, useState } from 'react'
import "./singlepost.css"
import { allPostAPI, deletePostAPI } from '../services/allAPI'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/baseURL'
import Topbar from './Topbar'

function SinglePost() {
  const {id}=useParams()
  const [allPosts,setAllPosts]=useState({})
  const user=JSON.parse(sessionStorage.getItem("existingUser"))


// api calling
const getAllPosts=async()=>{
  const result=await allPostAPI()
  if(result.status===200){
      setAllPosts(result.data.find(item=>item._id==id))
  }
  else{
      console.log(result);
      console.log(result.response.data);
  }
}

useEffect(()=>{
  // api call
  getAllPosts()
},[])


console.log(allPosts);

const navigate = useNavigate()

const deletePost=async(productId)=>{
  const token=sessionStorage.getItem("token")
  const reqHeader={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
  const result=await deletePostAPI(productId,reqHeader)
  if(result.status===200){
    navigate('/home')

    // page reload 
  //   setAddproductResponse(result.data)
  alert("post deleted")

  }
  else{
    console.log(result);
    alert(result.response.data);
  }
}


  return (
   <>
   <Topbar/>
      <div className="singlePost">
      <div className="singlePostWrapper">
      <img className='singlePostImg' width={"100%"} src={`${BASE_URL}/uploads/${allPosts?.image}`} alt="" />
        <h1 className="singlePostTitle">
  {allPosts.title}        <div className="singlePostEdit">

{
  user._id==allPosts.userId&&
<>
  
  
  <Link to={`/editpost/${allPosts._id}`}>
                <i className="singlePostIcon far fa-edit"></i>
    
  </Link>
  <button style={{ border: "0px", backgroundColor: "white" }} onClick={() => deletePost(allPosts._id)}>
    <i className="singlePostIcon far fa-trash-alt"></i>
  </button>
</>


}



          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
               {allPosts.username}
            </b>
          </span>
          {/* <span>1 day ago</span> */}
        </div>
        <p className="singlePostDesc">
         {allPosts.desc}
        </p>
      </div>
    </div>
   </>
  )
}

export default SinglePost