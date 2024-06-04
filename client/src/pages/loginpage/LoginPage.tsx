import { Link } from "react-router-dom"
import { CustomButton, CustomInput } from "../../components";
import useCustomFormik from "../utils/Formik_Yup.ts";
import {login} from "../utils/RestApi.ts"
import { initialValuesTypes } from "../../types/index.ts";
import { useNavigate } from "react-router-dom";
import loginSchema from "../schema/login.ts";
// import axios from "axios";
import { useState } from "react";


const LoginPage = () => {
  interface ResponseType{
    status:boolean;
    message:string;
  }
  const [response, setReponse] = useState<ResponseType>({status:false,message:""})
  const navigate = useNavigate();
  

  const initialValues:initialValuesTypes =  {
    username: "",
    password: ""
  }


  const onSubmit = async (values: initialValuesTypes) => {
    try {
        const credentials = await login(values);
        console.log('Credentials:', credentials);
        if (credentials.status) {
            console.log(credentials, "Login successful");
            alert("Welcome!");
            navigate("/homepage");
        }
    } catch (error) {
        alert("Login failed");
        navigate("/");
        if (error === false){
          console.log("Tang ina nyo")
        }else{
          console.log("mas putang ina ka")
        }
          
    }
};
  const {
    getFieldProps,
    touched,
    errors,
    handleSubmit} = useCustomFormik(initialValues,loginSchema,onSubmit);

  return (
    <>
    {/* {formik} */}
      <div className="h-screen w-screen bg-[#DBF9D8] flex items-center justify-center"> 
        <div className="max-w-sm text-[#5d5e5f] w-full h-full flex flex-col py-6">
          <h1 className="text-center text-xl font-medium pb-10 ">Login Page</h1>
          <div className=" h-full flex flex-col  rounded-md">
            
            <form onSubmit={handleSubmit}>
              <CustomInput
                inputId = {"username"}
                inputClass={""} 
                inputTitle={"Username"}
                boilerPlate={getFieldProps('username')

                }
              />
              {touched.username && errors.username && <div>{errors.username}</div>}

              <CustomInput 
                inputId = {"username"}
                inputClass={""}
                inputTitle={"Password"} 
                boilerPlate={getFieldProps('password')}
                />
              {touched.password && errors.password && <div>{errors.password}</div>}

              <CustomButton 
              btnName={"Login"}
              btnType="submit"
              btnClass={"bg-[#BFFCF9] w-full text-[#000000] py-2 rounded-xl mt-4 active:opacity-50"}
              />

            </form>

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