require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConnection = process.env.DATABASE_CONNECTION;

const productRouter = require("./routes/productRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/products", productRouter)

async function start(){
    try{
        await mongoose.connect(dbConnection);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log("Conexion con mongo correcta");
    }
    catch(error){
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}


start();