import * as axios from "axios";

export const authorized_fetch = axios.create({
    headers: {'x-access-token': localStorage.getItem('token')}
})