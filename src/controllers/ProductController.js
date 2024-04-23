const ProductService = require("../services/productServices");

const getAllProducts = async (req, res) => {
    try{
        const allProducts = await ProductService.getAllProducts();
        if(allProducts.length === 0){
            return res.status(404).send({message:'no existen Productos todavia'})
        }
        res.send({status: "OK", data: allProducts});
    }
    catch ( error){
        res
        .status(error?.status || 500 )
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: {error: error?.message || error }});
    }
};

const addNewProduct = async (req, res) => {
    const { body } = req;

    const newProduct = {
        name: body.name,
        image: body.image,
        category: body.category,
        description: body.description,
        shortDescription: body.shortDescription,
    }

    try{
        const createdProduct = await ProductService.addNewProduct(newProduct);
        res.status(201).send({status: "OK", data: createdProduct});
    }
    catch ( error){
        res
        .status(error?.status || 500 )
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: {error: error?.message || error }});
    }
};

const findByValue = async (req, res) => {

    const {filter} = req.params;
    
    try{
        const filteredProducts = await ProductService.findByValue(filter);
        console.log(filteredProducts)
        if(filteredProducts.length === 0){
            return res.status(404).send({message:'no existen productos que coincidan con esa busqueda'})
        }
        res.send({status: "OK", data: filteredProducts});
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
    getAllProducts,
    addNewProduct,
    findByValue
}