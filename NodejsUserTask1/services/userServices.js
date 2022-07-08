const { func } = require("joi");
const { users } = require("../data-access/db-con");

//validating given data with schema
exports.userValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error === null || error === void 0 ? void 0 : error.isJoi) {
      res.status(400).json(error.message);
    }
    else {
      next();
    }
  };
};

//get all users from db
exports.getUsersFromDB = async () => {
    return await users.findAll();
}

//get user by id from db
exports.getUserById = async (id) => {
    let user = await users.findByPk(id);
    if(!user){
      let error = new Error("User not found");
      error.status=404;
      throw error;
    }
    return user;
  }

//save user data in db
exports.saveUserInDB = async (id, login, age, password, isdeleted) => {
 
    return await users.bulkCreate([                  
      { id: id, login: login, age: age, password: password, isdeleted: isdeleted },
    ]);
   
  }

//update user by id in db
exports.updateUserInDB = async (id, login, password, age) => {
    return await users.update(
      { login: login, password: password, age: age },
      { where: { id: id } }
    );
  }
  

//delete user by id from db
exports.deleteUserFromDB = async (id) => {
  
    return await users.destroy({ where: { id: id } });
  
}