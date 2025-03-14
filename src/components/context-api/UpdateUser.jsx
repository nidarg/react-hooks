import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    const {user, updateUser} = useContext(UserContext)

    const[newName, setNewName] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        updateUser(newName)
       
        
    }
  return (
    <div>
      <h2>User name :   {user.name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Update user name</label>
        <input id='name' type="text" value={newName} onChange={(e)=> setNewName(e.target.value)} />
        <button type='submit'>update user</button>
      </form>
      
    </div>
  )
}

export default UpdateUser
