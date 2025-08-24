import background from "../assets/Background.png";
import { useForm } from "react-hook-form";
import axios from 'axios'

function Register() {
  let {
    register,
    handleSubmit,
    setError,

    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onSubmit",
  });

  async function onSubmit(data) {
    try {
      console.log(data);
      let res = await axios.post(`${import.meta.env.VITE_BASE_URL}user/signup` ,{
          data
      })
      console.log(res.data);
      
      
    } catch (error) {
      console.log(error.response.data);
     
      setError("myForm", { type: "cutom", message: error.response.data.message });
      
    }

  }

  return (
    <>
      <div
        className="w-full h-screen py-20 bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative w-[75%] mx-auto ">
          <div className="absolute inset-0 backdrop-blur-xs  bg-white opacity-40 rounded-2xl"></div>

          <div className="relative z-10 p-6">
            <div className="mb-6 mx-auto w-full">
              <h1 className=" text-center w-full text-2xl font-['jua']">
                Register
              </h1>
              <p className="text-sm font-['Roboto'] text-red-500 h-2 mb-2 text-center">
                {errors.myForm ? errors.myForm.message : ""}
              </p>
            </div>
            <div className="input-boxes">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Username"
                    className="p-2 rounded font-['poppins'] border border-gray-400 bg-neutral-300 focus:border-gray-500 outline-none focus:outline-none w-full"
                    {...register("username", {
                      required: true,
                      minLength: {
                        value: 5,
                        message: "Username must be atleast 5 charchters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Username must be less than 12 charchters",
                      },
                    })}
                  />
                </div>
                <p className="text-xs font-['Roboto'] text-red-500 h-2 mb-2">
                  {errors.username ? errors.username.message : ""}
                </p>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-2 rounded font-['poppins'] border border-gray-400 bg-neutral-300 focus:border-gray-500 outline-none focus:outline-none w-full"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 3,
                        message: "Password must be atleast 3 charchters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password must be less than 12 charchters",
                      },
                    })}
                  />
                  <p className="text-xs font-['Roboto'] text-red-500 h-2 my-2">
                    {errors.password ? errors.password.message : ""}
                  </p>
                </div>
                <input
                  type="submit"
                  value="Sign up"
                  className="p-2 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
