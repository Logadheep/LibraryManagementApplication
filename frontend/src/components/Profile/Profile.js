import React from 'react'

const Profile = () => {
  return (
    <div className="profile-icon">
      <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          xlink="http://www.w3.org/1999/xlink" 
          width="50" 
          height="50"
          stroke="white"
          strokeWidth="2"
          fill="none">
      
        <title>Abstract user icon</title>
          
        <circle cx="25" cy="25" r="20" />
        <circle cx="25" cy="19" r="8" />	
        <path d="M13,40 a10,10 1 0,1 25,0" strokeLinecap="butt" />
      </svg>
    </div>
  )
}

export default Profile