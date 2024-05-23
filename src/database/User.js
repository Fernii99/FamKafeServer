const User = require('../models/userModel')


const findUserByEmail = async (email) => {
   
    try{
       
        const UserFound = await User.find({"email": email.toString()});
        return UserFound;
    }catch (error){
        throw error;
    }
}

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
    findUserByEmail,
    addNewUser
}