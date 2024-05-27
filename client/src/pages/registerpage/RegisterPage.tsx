import { Link } from "react-router-dom";
import { CustomButton, CustomInput } from "../../components"
import { initialValuesTypes } from "../../types"
import useCustomFormik from "../utils/Formik_Yup";
import { register } from "../utils/RestApi";

const RegisterPage = () => {
  const initialValues:initialValuesTypes =  {
    email:"",
    username: "",
    password: "",
    displayName:""
  }

  const onSubmit = (values:initialValuesTypes) => {
    register(values);
  };

  const { getFieldProps, handleSubmit } = useCustomFormik(initialValues,onSubmit);


  return (
    <>
      <div className="h-screen w-screen bg-[#DBF9D8] flex items-center justify-center">
        <div className="max-w-sm text-[#5d5e5f] w-full h-full flex flex-col py-6">
          <h1 className="text-center text-xl font-medium pb-10 ">Register Page</h1>
          
          <div className="h-full flex flex-col  rounded-md">
            <form action="" onSubmit={handleSubmit} >
              <CustomInput inputTitle={"email"} inputId={""} inputClass={""} boilerPlate={getFieldProps("email")}/>
              <CustomInput inputTitle={"username"} inputId={""} inputClass={""} boilerPlate={getFieldProps("username")}/>
              <CustomInput inputTitle={"password"} inputId={""} inputClass={""} boilerPlate={getFieldProps("password")}/>
              <CustomInput inputTitle={"display name"} inputId={""} inputClass={""} boilerPlate={getFieldProps("displayName")}/>


              <div className="flex flex-row justify-center items-center gap-2 pt-5">
                <p className="text-nowrap text-sm">
                  Already have an account? <Link className="text-violet-700" to={`/`}>Login your account</Link>
                </p>
              </div>

              <CustomButton 
              btnName={"Login"}
              btnType="submit"
              btnClass={"bg-[#BFFCF9] w-full text-[#000000] py-2 rounded-xl mt-4 active:opacity-50"}
              />
            </form>

            
          </div>

        </div>
      </div>
    </>
  )
}

export default RegisterPage