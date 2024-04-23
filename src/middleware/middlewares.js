const newProductValidation = (req, res, next) => {
    const { body } = req;
    if(
            body.name !=  ""  &&
            body.description != "" &&
            body.image != "" &&
            body.category != "" &&
            body.shortDescription != ""
    ){
        next();
    }else{
        res
        .status(400)
        .send({
            status: "FAILED", 
            data:{ error: "ONE OR MORE OF THE FIELDS  NEEDED TO CREATE THE PRODUCT IS EMPTY"}
    })
    }
};

const filterProductsValidation = (req, res, next) => {
    const { filter } = req.params;
    console.log("FILTER PRODUCTS MIDDLEWARE");
    console.log(filter);
    if(
           req.params === ""
    ){
        res
        .status(400)
        .send({
            status: "FAILED", 
            data:{ error: "ONE OR MORE OF THE FIELDS  NEEDED TO CREATE THE PRODUCT IS EMPTY"}
    })
    }
    next();
    
};

module.exports = { newProductValidation, filterProductsValidation }