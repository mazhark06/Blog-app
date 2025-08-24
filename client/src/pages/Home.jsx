import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='bg-red-400'>Home</div>
    <Link to={"/user/register"}> Register user</Link>
    </>
  )
}

export default Home