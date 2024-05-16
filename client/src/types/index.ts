import { FieldInputProps } from "formik";

export type CustomInputType={
    inputTitle:string;
    inputId:string;
    inputClass:string;
    boilerPlate: FieldInputProps<string>;
}

export type CustomButtonTypes = {
    btnName:string;
    btnClass:string;
    btnType: "button" | "submit"
}

export type initialValuesTypes = {
    username:string;
    password:string;
}


export type onSubmitType = (values: initialValuesTypes) => void;
