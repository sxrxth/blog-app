import React, { useEffect, useState } from 'react';
import "./settings.css";
import Topbar from '../components/Topbar';
import { edituserAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseURL';

function Settings() {
  
  const [userprofile,setUserprofile]=useState({
    username:"",email:"",password:"",profile:""
  })
  const [existingImage,setExistingImage]=useState("")
  const [preview,setPreview]=useState("")



  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setUserprofile({...userprofile,username:user.username,email:user.email,password:user.password,profile:""})
        
        setExistingImage( user.profile )
console.log(user);

    }
  },[])

  useEffect(()=>{
    if(userprofile.profile){
        setPreview(URL.createObjectURL(userprofile.profile))

    }
    else{
        setPreview("")
      }
  },[userprofile.profile])


  const handleProfileUpdate=async(e)=>{
    e.preventDefault()
    const {username,email,password,profile}=userprofile
    if(!username || !email ){
        alert("please fill the form completely")
    }
    else{
        const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      preview?reqBody.append("profile",profile): reqBody.append("profile",existingImage)

      const token=sessionStorage.getItem("token")
      if(preview){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
    // api call
    const result=await edituserAPI(reqBody,reqHeader)
    if(result.status==200){
        alert("Profile updated successfully")
        sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    }
    else{
        console.log(result);
        console.log(result.response.data);

       }
    
    }
    else{
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        // api call
    const result=await edituserAPI(reqBody,reqHeader)
    if(result.status==200){
        alert("Profile updated successfully")
        sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    }
    else{
        console.log(result);
        console.log(result.response.data);

       }
    
    
    }



    }
  }
  console.log(userprofile);


  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            {/* <span className="settingsTitleDelete">Delete Account</span> */}
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
            {existingImage!==""?
                        <img style={{width:"180px",height:"180px"}} src={preview?preview: `${BASE_URL}/uploads/${existingImage}` }alt="" />:
                        <img style={{width:"180px",height:"180px"}} src={preview?preview: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" }alt="" />
        }
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
                onChange={(e)=>setUserprofile({...userprofile,profile:e.target.files[0]})}
              />
            </div>
            <label>Username</label>
            <input value={userprofile.username} onChange={(e)=>setUserprofile({...userprofile,username:e.target.value})} type="text" placeholder="Username" name="name" />
            <label>Email</label>
            <input value={userprofile.email} onChange={(e)=>setUserprofile({...userprofile,email:e.target.value})} type="email" placeholder="email@gmail.com" name="email" />
            {/* <label>Password</label>
            <input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}  type="password" placeholder="Password" name="password" /> */}
            <button onClick={handleProfileUpdate} className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Settings;
