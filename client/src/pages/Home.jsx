import React from 'react'
import { useEffect } from 'react'
import { Link,useNavigate ,useLocation} from 'react-router-dom'
import userAuth from '../Hooks/user.auth.js'
function Home() {
    let Location = useLocation()

let navigate = useNavigate()
useEffect(() => {
  let isMounted = true;

 userAuth(navigate,Location,'/user/api','/' )
  return () => {
   isMounted = false;
}
}, [])


  return (
    <>
    <div className='bg-red-400'>Home</div>
    <Link to={"/user/register"}> Register user</Link>
    </>
  )
}

export default Home