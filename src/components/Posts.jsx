import React from 'react'
import "./posts.css"
import Post from "../components/Post";

import { allPostAPI } from '../services/allAPI';
import { useState, useContext, useEffect } from 'react';


function Posts() {

const [allPosts,setAllPosts]=useState([])

// api calling
const getAllPosts=async()=>{
  const result=await allPostAPI()
  if(result.status===200){
      setAllPosts(result.data)
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
  return (
    <div className='posts'>
     
  {  allPosts?.length>0?allPosts?.map(post=>(
      <Post post={post} />

    )):<img width={"200px"} height={"200px"} src="https://static.thenounproject.com/png/4532229-200.png" alt="" />
}

    </div>
  )
}

export default Posts