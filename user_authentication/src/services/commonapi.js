import axios from 'axios';

const commonAPI =async(httpmeth,url,data)=>{
 const reqconfig={
    method: httpmeth,
    url,
    data,
 }
  return await axios(reqconfig).then(res=>{
       return res
  }).catch(error=>{
    return error
  })
}

export default commonAPI