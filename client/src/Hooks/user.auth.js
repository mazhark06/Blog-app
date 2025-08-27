import axios from "axios";
const userAuth = async (navigate,location, path , to) => {
  try {
    let res = await axios.get(`${import.meta.env.VITE_BASE_URL}${path}`, {
      withCredentials: true,
    
    });
    
    if(res.data?.success){
       if(location.pathname !== '/' ){
         navigate(to)

       } 

    } 

  } catch (error) {
    console.log(error.response);
    navigate("/user/login");
  }
};

export default userAuth;
