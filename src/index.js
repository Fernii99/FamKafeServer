require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConnection = process.env.DATABASE_CONNECTION;

const productRouter = require("./routes/productRoutes")
const userRouter = require("./routes/userRoutes")
const orderRouter = require("./routes/orderRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/products", productRouter)
app.use("/users", userRouter)
app.use("/orders", orderRouter)



// **********************************
//  FIREBASE PROJECT CONFIGURATION
// **********************************
const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert({
        "project_id": process.env.FIREBASE_PROJECT_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        "client_email": process.env.FIREBASE_CLIENT_EMAIL
    }),
})


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