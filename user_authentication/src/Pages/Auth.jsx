import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, CardHeader } from '@mui/material';
import { registerAPI } from '../services/allapi';


function Auth({Registrationn}) {
    
    const[user,setUser]=useState({username:'',email:'',password:''})
    console.log(user);

    

    const registration=async()=>{
        
        const{username,email,password}=user

        if (username && email && password) {

            const out = await registerAPI(user)
           console.log(out);
           
           if (out.status==201) {
             alert('Registration Successful')
             setUser({username:'',email:'',password:''})
           }
           else if(out.response.status==406) {
            alert(out.response.data)
           }
           else{
             
           }
        }
        else{

        }
    }
    
    

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-[400px] shadow-xl rounded-2xl">
       {
        Registrationn ?
        <CardHeader
          title="Sign Up"
          className="text-center text-xl font-semibold"
        />
        :
        <CardHeader
          title="Sign In"
          className="text-center text-xl font-semibold"
        />}
        <CardContent>
          <div className="flex flex-col gap-4">
         { 
            Registrationn &&
            <TextField
            
            id="outlined-error"
            label="Username"
            defaultValue=""
            onChange={e=>setUser({...user,username:e.target.value})}
            value={user.username}
          />}
           <TextField
            
            id="outlined-error"
            label="Email"
            type='email'
            defaultValue=""
            onChange={e=>setUser({...user,email:e.target.value})}
            value={user.email}

          />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              className="w-full"
              required
              onChange={e=>setUser({...user,password:e.target.value})}
                value={user.password}
            />
            { 
                Registrationn ?
                <Button
              variant="contained"
              color="primary"
              className="w-full py-2 rounded-lg"
               onClick={registration}
            >
              Register
            </Button>
            :
            <Button
              variant="contained"
              color="primary"
              className="w-full py-2 rounded-lg"
            >
              Login
            </Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Auth;
