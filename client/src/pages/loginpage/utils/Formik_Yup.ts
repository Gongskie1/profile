import { useFormik } from "formik";
import { initialValuesTypes, onSubmitType } from "../../../types";

const useCustomFormik = (
    initialValues: initialValuesTypes, 
    onSubmit:onSubmitType
    
) =>
    {
        
    const formik =useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit
    })
    return formik
}

export default useCustomFormik;