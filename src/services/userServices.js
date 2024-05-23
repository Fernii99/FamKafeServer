const User = require('../database/User');

const LoginUser = async (newUser) => {
   
    try{
        const ExistingUser = await User.findUserByEmail(newUser.email);

        console.log("ExistingUser found user");
        console.log(ExistingUser);

        if(ExistingUser.length === 0 ){
            const userToCreate = {
                name: newUser.name,
                email: newUser.email,
                image: newUser.picture,
            }
            console.log("EMAIL NOT REGISTERED ON THE DATABASE, REGISTRING NEW USER ")
            const createdUser = await User.addNewUser(userToCreate);
            return createdUser;
        }
        else{
            console.log("EMAIL REGISTERED ON THE DATABASE, DISPLAYING DATA ")
            console.log(ExistingUser)
            return ExistingUser
        }
        
    }catch (error){
        throw error;
    }
};


module.exports = { 
    LoginUser
}