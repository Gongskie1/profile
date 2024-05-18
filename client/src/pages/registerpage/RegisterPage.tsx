import { CustomInput } from "../../components"
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
      <div className="flex h-screen bg-[#DBF9D8] justify-center pt-5">
        <div className="flex">
          <h1>Register Page</h1>
          
          <div className="flex">
            <form action="" onSubmit={handleSubmit}>

              <CustomInput inputTitle={""} inputId={""} inputClass={""} boilerPlate={getFieldProps("email")}/>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default RegisterPage