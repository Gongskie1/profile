
export interface CustomInputType{
    inputTitle:string;
    inputName:string;
    inputClass:string;
}

export interface CustomButtonTypes{
    btnName:string;
    btnClass:string;
    btnType: "button" | "submit"
}

export type initialValuesTypes = {
    username:string;
    password:string;
}


export type onSubmitType = (values: initialValuesTypes) => void;
