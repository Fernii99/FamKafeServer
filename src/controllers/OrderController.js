const orderSevice = require("../services/orderServices");

const addNewOrder = async (req, res) => {

    const { body } = req.body;

    const newOrder = body;

    try{
        const createdOrder = await orderSevice.addNewOrder(newOrder);
        res.status(201).send({status: "OK", data: createdOrder});
    }
    catch ( error){
        res
        .status(error?.status || 500 )
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: {error: error?.message || error }});
    }
};

const getAllOrders = async (req, res) => {

    try{
        const foundOrders = await orderSevice.getAllOrders();
        res.status(201).send({status: "OK", data: foundOrders});
    }
    catch ( error){
        res
        .status(error?.status || 500 )
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: {error: error?.message || error }});
    }
};

const getUserOrders = async (req, res) => {

    const {params:{userId}} = req;

    console.log(userId)

    try{
        const foundOrders = await orderSevice.getUserOrders(userId);
        res.status(201).send({status: "OK", data: foundOrders});
    }
    catch ( error){
        res
        .status(error?.status || 500 )
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: {error: error?.message || error }});
    }
};

module.exports = { 
    addNewOrder,
    getAllOrders,
    getUserOrders
}