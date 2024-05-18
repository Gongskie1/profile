import axios from "axios";
import { initialValuesTypes } from "../../types";

const loginUri = "http://localhost:8080/login";
const registerUri = "http://localhost:8080/register-account";

export const login = async (values:initialValuesTypes) =>{
    try {
        const outPut = await axios.post(loginUri, values)
        console.log(outPut.data)
    } catch (error) {
        console.log("putang ina: ",error)
    }
}


export const register = async (values:initialValuesTypes) =>{
    try {
        const outPut = await axios.post(registerUri,values);
        console.log(outPut)
    } catch (error) {
        console.log("Putang ina: ", error);
    }
}

