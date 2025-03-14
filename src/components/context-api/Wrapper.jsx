import React from 'react'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'
import { UserProvider } from './UserContext'

const WrapperContextApi = () => {
  return (
    <UserProvider>
     <UserProfile/>
     <UpdateUser/> 
    </UserProvider>
  )
}

export default WrapperContextApi
