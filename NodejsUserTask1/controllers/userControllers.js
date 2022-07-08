const userService = require("../services/userServices");

//get all users from db with help of services
exports.getUsers = async (req, res) => {                    //with async and await
    let list = [];
    list = await userService.getUsersFromDB();            //await Imp *** //from services
    const loginSubstring = '', limit = 10;
    list.filter(user => user.login.includes(loginSubstring.toString()) && !user.isDeleted) //if user deleted dont display
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, Number(limit));
    res.send(list);
}

//get user by id from db with help of services
exports.getUsersById = async (req, res) => {
    const id = req.params.id;
    try {                                             //to handle any errors
        const userToFind = await userService.getUserById(id);
        res.send({
            message: "Retrieved user details",
            data: userToFind
        });
    }
    catch (err) {
        throw err;
    }
}

//save user in db using services 
exports.saveUser = async (req, res) => {
    const { id, login, age, password } = req.body;
    console.log(id);
    const isdeleted = false;
    try {
        await userService.saveUserInDB(id, login, age, password, isdeleted);
       res.send({
            message : "Data inserted successfully"
       });
    }
    catch (err) {
        throw err;
    }
}

//update user by id in db with help of services
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body;       
    try{
    const userToUpdate = await userService.getUserById(id);
    if (userToUpdate) {
        await userService.updateUserInDB(id, login, password, age);
        res.send({
            message:"updated successfully ! !"
        });
        }
    }
     catch (err) {
        throw err;
    }
}

//dalete user by id from db using services
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    // const userToDelete = await userService.getUserById(id);
    // if (!userToDelete || userToDelete.isDeleted) {
    //     res.send('User not found');
    // }
    // else {
        try {

             await userService.deleteUserFromDB(id)
            res.send({
                message:"Succesfully deleted ! !",
            });
        }
        catch (err) {
            throw err;
        }
    }

exports.invalidUrl = (req,res)=>{
    res.status(404).json({
        message: `Resource couldnot found - ${req.originalUrl}`
    });
}