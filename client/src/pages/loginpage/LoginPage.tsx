import { Link } from "react-router-dom"
import { CustomButton, CustomInput } from "../../components"

const LoginPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#DBF9D8] flex items-center justify-center"> 
        <div className="max-w-sm text-[#124975] w-full h-full flex flex-col py-6">
          <h1 className="text-center text-xl font-medium pb-10 ">Login Page</h1>
          <div className=" h-full flex flex-col  rounded-md">
            
            <div>
              <CustomInput 
                inputName={"username"} 
                inputClass={""} 
                inputTitle={"Username"}
              />
              <CustomInput 
                inputName={"password"} 
                inputClass={""} 
                inputTitle={"Password"}
              />
              <CustomButton 
              btnName={"Login"} 
              btnClass={"bg-[#BFFCF9] w-full text-[#000000] py-2 rounded-xl mt-4 hover:opacity-50"}
              />

            </div>

            <div className="h-full flex flex-col">
              <div className="flex flex-row justify-center items-center gap-2 pt-5">
                <p className="border-b-[1px] border-black w-full"></p>
                <p className="text-nowrap text-sm">
                  <Link to={`/register`}>Register your account</Link>
                </p>
                <p className="border-b-[1px] border-black w-full"></p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage