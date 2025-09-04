import commonAPI from "./commonapi";

const serverlink = 'https://userbackend-q032.onrender.com'

export const registerAPI = (data=>{
    return commonAPI('post',`${serverlink}/register`,data)
})

export const loginAPI = (data =>{
    return commonAPI('post',`${serverlink}/login`,data)
})