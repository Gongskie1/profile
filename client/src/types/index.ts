import { FormikHelpers } from "formik/dist/types";

export interface CustomInputType{
    inputTitle:string;
    inputName:string;
    inputClass:string;
}

export interface CustomButtonTypes{
    btnName:string;
    btnClass:string;
}

export type initialValuesTypes = {
    username?:string;
    password?:string;
}

export type onSubmitType = (
    values: initialValuesTypes,
    formikHelpers: FormikHelpers<initialValuesTypes>
  ) => void | Promise<string>;