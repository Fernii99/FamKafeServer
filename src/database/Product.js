const Product = require('../models/productModel')

//ALL PRODUCTS INSERTED IN THE DATABASE
const getAllProducts = async () => {
    try{
        const products = await Product.find();
        return products;
    }catch (error){
        throw error;
    }
}

//INSERT ONE NEW PRODUCT ON THE DATABASE
const addNewProduct = async (newProduct) => {
    try{
        const productToInsert = new Product(newProduct);
        const createdProduct = await productToInsert.save();
        return createdProduct;
    }catch (error){
        throw error;
    }
}

//FIND ON PRODUCT WITH THE VALUE ON THE SEARCHBAR
const findByValue = async (filter) => {

    const filterLowercase = filter.toLowerCase()

    try{
        const productsFound = await Product.find({name: { $regex: '.*' + filterLowercase + '.*' }});
        return productsFound;
    }catch (error){
        throw error;
    }
}

module.exports = { 
    getAllProducts,
    addNewProduct,
    findByValue
}