//IMPORT FROM PACKAGES
const express = require('express'); //import 'package:express/express.dart'
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');
//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
//INIT
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://mirza:mirzamsts2003k@cluster0.df7whxe.mongodb.net/?retryWrites=true&w=majority';
//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

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