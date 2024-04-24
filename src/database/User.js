const User = require('../models/userModel')

//INSERT ONE NEW USER ON THE DATABASE
const addNewUser = async (newUser) => {
    try{
        const userToInsert = new User(newUser);
        const createdUser = await userToInsert.save();
        return createdUser;
    }catch (error){
        throw error;
    }
}


module.exports = { 
    addNewUser
}