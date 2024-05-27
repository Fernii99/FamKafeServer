const express = require("express");
const router = express.Router();

const productMW = require("../middleware/middlewares");

const orderController = require("../controllers/OrderController")

router.post("/new",  orderController.addNewOrder);

//ALL THE ORDERS THAT HAVE BEEN PLACED
router.get("/all",  orderController.getAllOrders);

//PENDING ORDERS TO DISPLAY ON THE  ADMIN SCREEN
router.get("/pending",  orderController.getPendingOrders);

//THE APP USING PROFILES ORDERS 
router.get("/:userId",  orderController.getUserOrders);

//Update one order
router.patch("/:orderId",  orderController.updateOrder);




module.exports = router;