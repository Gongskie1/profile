import { useFormik } from "formik";
import { initialValuesTypes, onSubmitType,loginSchemaType } from "../../types";

const useCustomFormik = (
    initialValues: initialValuesTypes,
    validationSchema:loginSchemaType,
    onSubmit:onSubmitType
    
) =>
    {
        
    const formik =useFormik({
        initialValues:initialValues,
        validationSchema:validationSchema,
        onSubmit:onSubmit
    })
    return formik
}

export default useCustomFormik;