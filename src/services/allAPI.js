import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI=async (user)=>{

    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login

export const loginAPI=async (user)=>{

    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//edit user 

export const edituserAPI=async (reqBody,reqHeader)=>{

    return await commonAPI("put",`${BASE_URL}/user/edituser`,reqBody,reqHeader)
}
// addproject
export const addPostAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/post/add`,reqBody,reqHeader)
}

// homeproject
// export const homePostAPI=async ()=>{
//     return await commonAPI("GET",`${BASE_URL}/post/home-posts`,"","")
// }

// allprojects
export const allPostAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/post/all`,"","")

}
// user projects
export const userpostAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-posts`,"",reqHeader)
}

// edit post
export const editPostAPI=async(postId,reqBody, reqHeader)=>{
    return await commonAPI("put",`${BASE_URL}/post/edit/${postId}`,reqBody,reqHeader)
}

// delete post
export const deletePostAPI=async(postId,reqHeader)=>{
    return await commonAPI("delete",`${BASE_URL}/post/remove/${postId}`,{},reqHeader)
}

