const mongoose =require('mongoose')

const connection=process.env.connection_link

mongoose.connect(connection).then(res=>{
   console.log('DataBase connected successfully');
   
}).catch(err=>{
    console.log('connection to database failed',err);
    
})