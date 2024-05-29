const Order = require('../models/orderModel')

//INSERT ONE NEW USER ON THE DATABASE
const addNewOrder = async (newOrder) => {
    try{
        const orderToInsert = new Order(newOrder);
        const createdOrder = await orderToInsert.save();
        return createdOrder;
    }catch (error){
        throw error;
    }
}

const getAllOrders = async () => {
    try{
        const foundOrders = await Order.find({});
        console.log(foundOrders)
        return foundOrders;
    }catch (error){
        throw error;
    }
}

const getUserOrders = async (userId) => {
    try{
        const foundOrders = await Order.find({ "profileid": userId}, "products profileid price status orderDate", );
        console.log(foundOrders)
        return foundOrders;
    }catch (error){
        throw error;
    }
}

const getPendingOrders = async () => {
    try{
        const foundOrders = await Order.find({ "status": "pending"}, "products profileid price status");
        console.log(foundOrders)
        return foundOrders;
    }catch (error){
        throw error;
    }
}

const updateOrder = async (orderId) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate({ "_id": orderId}, {"status": "done"}, { new:true });
        console.log(updatedOrder)
        return updatedOrder;
    }catch (error){
        throw error;
    }
}


module.exports = {
    addNewOrder,
    getAllOrders,
    getUserOrders,
    getPendingOrders,
    updateOrder
}