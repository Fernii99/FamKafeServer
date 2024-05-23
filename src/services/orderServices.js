const Order = require('../database/Order');



const addNewOrder = async (newOrder) => {
    console.log("newOrder Services")
    console.log(newOrder)
    try{
        const createdOrder = Order.addNewOrder(newOrder);
        return createdOrder;
    }catch (error){
        throw error;
    }
};

const getAllOrders = async () => {
    
    try{
        const ordersFound = Order.getAllOrders();
        return ordersFound;
    }catch (error){
        throw error;
    }
};

const getUserOrders = async (userId) => {
    
    try{
        const ordersFound = Order.getUserOrders(userId);
        return ordersFound;
    }catch (error){
        throw error;
    }
};



module.exports = { 
   addNewOrder,
   getAllOrders,
   getUserOrders
}