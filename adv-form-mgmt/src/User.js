import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching users&apos; details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User