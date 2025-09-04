import commonAPI from "./commonapi";

const serverlink = 'http://localhost:3000'

export const registerAPI = (data=>{
    return commonAPI('post',`${serverlink}/register`,data)
})

export const loginAPI = (data =>{
    return commonAPI('post',`${serverlink}/login`,data)
})