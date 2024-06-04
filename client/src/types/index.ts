import { FieldInputProps } from "formik";
import { ObjectSchema } from "yup";

export type CustomInputType={
    inputTitle:string;
    inputId?:string;
    inputClass:string;
    boilerPlate: FieldInputProps<string>;
}

export type CustomButtonTypes = {
    btnName:string;
    btnClass:string;
    btnType: "button" | "submit"
}

export type initialValuesTypes = {
    email?:string;
    username:string;
    password:string;
    displayName?:string;
}


export type onSubmitType = (values: initialValuesTypes) => void;

interface User {
    username:string;
    password:string
}

export type loginSchemaType = ObjectSchema<User>;


// export interface errors {
//     error:
// }
