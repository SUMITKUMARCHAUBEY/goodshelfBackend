const express=require('express');
const cors=require('cors');
const app=express();
const Routes=require('./Routes/routes');
const connectToDB=require('./db')
app.use(express.json());
app.use(cors());
connectToDB();

app.use('/Products',Routes);
app.listen(5000,()=>{
    console.log('listening to port no 5000');
})