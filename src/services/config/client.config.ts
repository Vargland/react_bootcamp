import axios from "axios";
import { API } from "../../constants/api";

export const client = axios.create({
    baseURL: API.BASE
});
