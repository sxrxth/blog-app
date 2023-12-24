import React, { useState } from 'react';
import "./write.css";
import { addPostAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';

function Write() {
  const [allPosts, setAllPosts] = useState({
    title: '',
    desc: '',
    categories: '',
    image: null, // Use null for file input
    username: '',
  });

  const navigate = useNavigate();
  const user=JSON.parse(sessionStorage.getItem("existingUser"))


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAllPosts({ ...allPosts, image: file });
  };

  const handleUpdate = async () => {

    const reqBody = new FormData();
    reqBody.append("title", allPosts.title);
    reqBody.append("desc", allPosts.desc);
    reqBody.append("categories", allPosts.categories);
    reqBody.append("image", allPosts.image);
    reqBody.append("username", user.username);

    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type":"multipart/form-data",
      "Authorization": `Bearer ${token}`
      
    };

    try {
      const result = await addPostAPI(reqBody, reqHeader);
      if (result.status === 200) {
        alert("Product added successfully...");
        // Assuming your API response contains the new post ID
        navigate(`/home`);
      } else {
        console.log(result);
        alert(result.response.data);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
console.log(user);
  return (
   <>
      <Topbar/>
      <div className="write">
        
        <img
          className="writeImg"
          src={allPosts.image ? URL.createObjectURL(allPosts.image) : ''}
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <input
              value={allPosts.title}
              onChange={(e) => setAllPosts({ ...allPosts, title: e.target.value })}
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <input
              value={allPosts.categories}
              onChange={(e) => setAllPosts({ ...allPosts, categories: e.target.value })}
              className="writeInputt"
              placeholder="Category"
              type="text"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              value={allPosts.desc}
              onChange={(e) => setAllPosts({ ...allPosts, desc: e.target.value })}
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
         
          <button className="writeSubmit" type="button" onClick={handleUpdate}>
            Publish
          </button>
        </form>
      </div>
      </>
    );
 
}

export default Write;
