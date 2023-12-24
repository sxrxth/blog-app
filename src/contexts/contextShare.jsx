import React, { createContext, useState } from 'react'
export const addPostResponseContext=createContext()
export const editPostResponseContext=createContext()
export const addRequestResponseContext=createContext()
export const deleteRequestResponseContext=createContext()
function ContextShare({children}) {
    const [addPostResponse,setAddPostResponse]=useState({})
    const [editPostResponse,setEditPostResponse]=useState({})
    const [deleteRequestResponse,setDeleteRequestResponse]=useState({})
    const [addRequestResponse,setaddRequestResponse]=useState({})

    

  return (
    <>
    <addPostResponseContext.Provider value={{addPostResponse,setAddPostResponse}}>
<editPostResponseContext.Provider value={{editPostResponse,setEditPostResponse}}>
  <addRequestResponseContext.Provider value={{addRequestResponse,setaddRequestResponse}}>
  <deleteRequestResponseContext.Provider value={{deleteRequestResponse,setDeleteRequestResponse}}>

            
                    {children}
                    
  </deleteRequestResponseContext.Provider>
  </addRequestResponseContext.Provider>
</editPostResponseContext.Provider>
    </addPostResponseContext.Provider>
    </>
  )
}

export default ContextShare