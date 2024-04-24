const User = require('../database/User');

const addNewUser = async (newUser) => {
    console.log("newUser DATA IN USER SERVICE")
    console.log(newUser)

    const userToCreate = {
        name: newUser.given_name,
        surname: newUser.family_name,
        email: newUser.email,
        image: newUser.picture,
    }

    try{
        const createdUser = User.addNewUser(userToCreate);
        return createdUser;
    }catch (error){
        throw error;
    }
};


module.exports = { 
    addNewUser
}