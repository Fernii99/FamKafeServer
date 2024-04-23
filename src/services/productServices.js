const Product = require('../database/Product');

const getAllProducts = async () => {
    try{
        const allProducts = Product.getAllProducts();
        return allProducts;
    }catch (error){
        throw error;
    }
};

const addNewProduct = async (newProduct) => {
    try{
        const createdProduct = Product.addNewProduct(newProduct);
        return createdProduct;
    }catch (error){
        throw error;
    }
};

const findByValue = async (filter) => {
    
    try{
        const productsFiltered = Product.findByValue(filter);
        return productsFiltered;
    }catch (error){
        throw error;
    }
};

module.exports = { 
    getAllProducts,
    addNewProduct,
    findByValue,
}