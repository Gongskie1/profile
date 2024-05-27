import axios from "axios";
import { initialValuesTypes } from "../../types";


const loginUri = "http://localhost:8080/login";
const registerUri = "http://localhost:8080/create-account";
type User  = {
    data?:{
        id:number;
        email:string
        username:string;
        password:string;
        display_name:string
    },
    message:boolean
}

export const login = async (values: initialValuesTypes): Promise<User> => {
    try {
        const response = await axios.post<User>(loginUri, values);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Unexpected response status: ' + response.status);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Login failed');
    }
};

export const register = async (values:initialValuesTypes) =>{
    try {
        const outPut = await axios.post(registerUri,values);
        console.log(outPut)
    } catch (error) {
        console.log("Putang ina: ", error);
    }
}

