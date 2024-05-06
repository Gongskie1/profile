import { useFormik } from "formik";
import { initialValuesTypes, onSubmitType } from "../../../types";

const useCustomFormik = (
    initialValues: initialValuesTypes, 
    onSubmitCallback:onSubmitType
    
) =>
    {
        
    const formik =useFormik({
        initialValues:initialValues,
        onSubmit:onSubmitCallback
    })
    return formik
}

export default useCustomFormik;