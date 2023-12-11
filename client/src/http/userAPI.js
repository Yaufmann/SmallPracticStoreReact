import {$host} from "./index";
import {jwtDecode} from 'jwt-decode'

const apiPath = 'user';


export const registration = async (email,password) => {
    const {data} = await $host.post(`api/${apiPath}/registration`, {email, password, role: 'ADMIN'})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email,password) => {
    const {data} = await $host.post(`api/${apiPath}/login`, {email, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    if(localStorage.getItem('token') == null) throw new Error("Пользователь не авторизован");
    const {data} = await $host.post(`api/${apiPath}/registration`)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}