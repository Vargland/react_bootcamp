import axios from "axios";
import { API } from "../../constants/api";


export const client = axios.create({
    method: 'get',
    baseURL: API.BASE,
});


client.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);
