const express = require('express');
const connectDB = require('./config/db')
const dotenv = require ('dotenv')
const app =express();
const egRouters = require('./routers/egRouter')
const userRouters = require('./routers/userRouter')
dotenv.config();
connectDB();
app.use(express.json());

app.use(egRouters);
app.use('/api/user',userRouters);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server us running on http://localhost:${PORT}`)
});