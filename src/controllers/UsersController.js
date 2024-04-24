const UserService = require("../services/userServices");
const admin = require('firebase-admin')

const addNewUser = async (req, res) => {
    const userData = req.body

    //SAVE THE IDTOKEN INTO A CONSTANT
    const idToken = userData.idToken;

    //MAKE THE VERIFICATION OF THE TOKEN WITH FIREBASE-ADMIN - AUTH() -
    const verificationUser = await admin.auth().verifyIdToken(idToken)

    

    try{
        const createdUser = await UserService.addNewUser(verificationUser);
        res.status(201).send({status: "OK", data: createdUser});
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
    addNewUser
}