import axios from "axios";
import { initialValuesTypes } from "../../types";


const loginUri = "http://localhost:8080/login";
const registerUri = "http://localhost:8080/create-account";
type User  = {
    status:boolean;
    message:string;
}


export const login = async (values: initialValuesTypes): Promise<User> => {
    try {
        const response = await axios.post<User>(loginUri, values);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            
            console.log('Login failed rest api:', error.response.data);
            throw error.response.data.status; 
        } else {
            console.log('Login failed:', error);
            throw new Error('Login failed');
        }
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

