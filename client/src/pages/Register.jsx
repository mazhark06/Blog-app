import background from "../assets/Background.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import userAuth from "../Hooks/user.auth.js";
function Register() {
  let navigate = useNavigate();
    let Location = useLocation()


useEffect(() => {
  let isMounted = true;

  userAuth(navigate,Location,'/user/auth','/')
return () => {
   isMounted = false;
}
}, [])


  let {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });



  async function onSubmit(data) {
    clearErrors("myForm"); // ✅ clear synthetic error before new request
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        data,
        { withCredentials: true }
      );
      
      if (res.data.success) {

        navigate("/");

      } else {
        setError("myForm", {
          type: "manual",
          message: res.data.message,
        });
      }
    } catch (error) {
      setError("myForm", {
        type: "manual",
        message: error?.response?.data?.message ,
      });
    }
  }

  return (
    <div
      className="w-full h-screen overflow-hidden py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative w-[75%] mx-auto ">
        <div className="absolute inset-0 backdrop-blur-xs bg-white opacity-40 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10 p-6">
          <div className="mb-6 mx-auto w-full">
            <h1 className=" text-center w-full text-2xl font-['jua']">Register</h1>

            <p className="text-sm font-['Roboto'] font-semibold text-red-500 h-4 pb-3 text-center">
              {errors.myForm?.message}
            </p>
          </div>

          <div className="input-boxes">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Username"
                  className="p-2 rounded font-['poppins'] border border-gray-400 bg-neutral-300 focus:border-gray-500 outline-none focus:outline-none w-full"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 5,
                      message: "Username must be at least 5 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Username must be less than 12 characters",
                    },
                  })}
                  onChange={() => clearErrors(["username", "myForm"])} // ✅ clears field + global error
                />
                <p className="text-xs font-['Roboto'] text-red-500 h-2 mb-2">
                  {errors.username?.message}
                </p>
              </div>

              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded font-['poppins'] border border-gray-400 bg-neutral-300 focus:border-gray-500 outline-none focus:outline-none w-full"
                  {...register("email", {
                    required: "Email is required",
                    minLength: {
                      value: 7,
                      message: "Email must be at least 7 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Email must be less than 50 characters",
                    },
                  })}
                  onChange={() => clearErrors(["email", "myForm"])} // ✅
                />
                <p className="text-xs font-['Roboto'] text-red-500 h-2 mb-2">
                  {errors.email?.message}
                </p>
              </div>

              <div className="w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded font-['poppins'] border border-gray-400 bg-neutral-300 focus:border-gray-500 outline-none focus:outline-none w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "Password must be at least 3 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be less than 12 characters",
                    },
                  })}
                  onChange={() => clearErrors(["password", "myForm"])} // ✅
                />
                <p className="text-xs font-['Roboto'] text-red-500 h-2 my-2">
                  {errors.password?.message}
                </p>
              </div>

              <input
                type="submit"
                value="Sign up"
                className="p-2 font-['Roboto',arial] font-semibold rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
              />
            </form>

            <div className="mx-auto text-sm w-max font-['poppins'] m-3">
              Already have an Account?{" "}
              <Link className="text-blue-500 font-semibold" to="/user/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
