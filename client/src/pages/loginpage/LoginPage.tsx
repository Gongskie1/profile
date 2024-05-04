import { CustomInput } from "../../components"

const LoginPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#DBF9D8] flex items-center justify-center"> 
        <div className="max-w-sm text-[#124975] w-full h-full flex flex-col py-6">
          <h1 className="text-center text-xl font-medium pb-10 ">Login Page</h1>
          <div className="border-8 h-full flex flex-col justify-between">
            
            <div>
              <CustomInput inputName={"username"} inputClass={""} inputTitle={"Username"}/>
              <CustomInput inputName={"password"} inputClass={""} inputTitle={"Password"}/>
            </div>

            <div></div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage