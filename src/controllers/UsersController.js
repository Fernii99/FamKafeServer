const UserService = require("../services/userServices");
const admin = require('firebase-admin')

const LoginUser = async (req, res) => {

    console.log("LOGIN PETITION COMING FROM CLIENT ")

    const userData = req.body

    //SAVE THE IDTOKEN INTO A CONSTANT
    const idToken = userData.idToken;

    //MAKE THE VERIFICATION OF THE TOKEN WITH FIREBASE-ADMIN - AUTH() -
    const verificationUser = await admin.auth().verifyIdToken(idToken)

    console.log("veirificationUser received in usercontroller")
    console.log(verificationUser)
    

    try{
        const createdUser = await UserService.LoginUser(verificationUser);
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
    LoginUser,
}