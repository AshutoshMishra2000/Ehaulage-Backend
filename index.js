const express =require('express');
const app=express();
const env=require('dotenv');
const mongoose=require('mongoose');
//const bodyParser = require('body-parser');
const authRoutes=require('./src/Routes/auth')
const adminRoutes=require('./src/Routes/admin/auth');
const categoryRoute=require('./src/Routes/category');
env.config();
const port=process.env.PORT||4000;
//Cloud Server Connection String--->mongodb+srv://Ashutosh:Rbo9u1X90KsRqRre@e-commerce.lqtp8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,   //it basically removes some of the depriacting warning from here
    useNewUrlParser: true    // to use new url when older version gets depricate
}).then(() => console.log('Database connection established'))
.catch(er => console.log('Unable to connect to your mongoDB server: ', er));
app.use(express.json());

app.use('/api',authRoutes);//from here we will be routed to the routes based on the route to the user route
app.use('/api',adminRoutes);
app.use('/api',categoryRoute);

app.listen(port,()=>{
    console.log(`the server is running on : ${port}`);
})