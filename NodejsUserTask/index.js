const express = require("express");
const app = express();
const port = process.env.port || 3500 ;

const router = require("./routeController").router;
app.use(express.json());
app.use("/",router);
app.listen(port , (request,response)=>{
    console.log(`port number is ${port}`);
});