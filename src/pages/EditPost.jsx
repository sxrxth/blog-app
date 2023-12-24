import React, { useEffect, useState } from 'react'
import "./editpost.css"
import { allPostAPI, editPostAPI } from '../services/allAPI'
import {  useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/baseURL'

function EditPost() {
    const {id}=useParams()
    const [allPosts,setAllPosts]=useState({})
    const navigate = useNavigate()




  
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
  console.log(allPosts);
  useEffect(()=>{
    // api call
    getAllPosts()
  },[])

 const handleUpdate=async()=>{



    const reqBody=new FormData()
    reqBody.append("title",allPosts.title)
    reqBody.append("desc",allPosts.desc)
    reqBody.append("categories",allPosts.categories)
    reqBody.append("image",allPosts.image)
    reqBody.append("username",allPosts.username)

    const token=sessionStorage.getItem("token")
    const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    //   api call
    
    const result=await editPostAPI(id,reqBody,reqHeader)
    if(result.status===200){
       alert("Product updated successfully...")
       navigate('/home')
        // pass response to my products
    
    }
    else{
        console.log(result);
        alert(result.response.data)
    }
    
    
 }

  return (
    <div className="write">
  <img className='writeImg' src={`${BASE_URL}/uploads/${allPosts.image}`} alt="" />
     
    <form className="writeForm">
      <div className="writeFormGroup">
        
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
          value={allPosts.title}
          onChange={(e)=>setAllPosts({...allPosts,title:e.target.value})}

        />
      </div>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
          value={allPosts.desc}
          onChange={(e)=>setAllPosts({...allPosts,desc:e.target.value})}
        />
      </div>
      <button onClick={handleUpdate} className="writeSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>  )
}

export default EditPost