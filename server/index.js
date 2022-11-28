//IMPORT FROM PACKAGES
const express = require('express'); //import 'package:express/express.dart'
const mongoose = require('mongoose');
//IMPORT FROM OTHER FILES
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
//INIT
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://mirza:mirzamsts2003k@cluster0.df7whxe.mongodb.net/?retryWrites=true&w=majority';
//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//connections
mongoose.connect(DB)
.then(() => {
    console.log('Connection successful');
}) 
.catch((e)=> {
    console.log(e);
})





app.listen(PORT , "0.0.0.0", ()=>{
    console.log(`connected at port ${PORT}`);
});