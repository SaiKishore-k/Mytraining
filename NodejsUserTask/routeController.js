const express = require("express");
const { type } = require("express/lib/response");
const joi = require("joi");
const {users} = require("./UserApiData/user");

const router = express.Router();

const getUserbyId = function(request,response){

    const id=request.params.id;
    const position=users.findIndex((users)=>users.id===id);
    if(position !=-1){
        response.statusCode=200;
       response.send(users[position]);
    }
    else{
        response.statusCode=404;
        response.send({"msg":"couldnt find the user"});
    }
}

const createUser = function(request,response){
    const newData = request.body;
    const isValid = Validation(newData);

    //console.log(isValid.error);

    if(!isValid.error){

        const position=users.findIndex((users)=>users.id===newData.id);
        if(position!=-1){
            response.statusCode=404;
            response.send({"msg":"Already user exists with id"});
        }
        else{
            response.statusCode=200;
            users.push(newData);
            response.send(users);
        }
    } 
    else{
        response.statusCode=400;
        response.send(`validation error found ${isValid.error.message} `);
    }
}

const updateUser = function(request,response){
    const newData = request.body;
    const isValid = Validation(newData);
    const id = request.params.id;
    if(!isValid.error){
        const position = users.findIndex((users)=>users.id===id);
        if(position!=-1){
            response.statusCode=200;
            users[position]=newData;
            response.send(users[position]);
        }
        else{
            response.statusCode=404;
            response.json({"msg":"cannot update the user"});
        }
    }
    else{
        response.statusCode=400;
        response.send(`validation error found ${isValid.error.message} `);
    }
}

const removeUser = function(request,response){

    const id = request.params.id;
    const position = users.findIndex((users)=>users.id===id && users.isDeleted===false);

    if(position!=-1){
        response.statusCode=200;
        users[position].isDeleted=true;
        response.send(users[position]);
        response.json({"msg" :"user is removed" });
    }
    else{
        response.statusCode=404;
        response.send({"msg" : "couldn't find the user to remove"});
    }
}

const getAutoSuggestUsers= function(request,response){
    const  subString = request.params.loginSubstring;
    const limit = request.params.limit;
    const UserSortedList = users.sort((username1,username2)=>username1.login.localeCompare(username2.login));

    const suggestedUsers= (UserSortedList.filter(users=>users.login.indexOf(subString)!=-1)).slice(0,limit);

    response.send(suggestedUsers);
    response.statusCode=200;

}

const urlHandler = function(request,response){
    response.statusCode=404;
    response.send(`msg : couldnt find the requested url ${request.originalUrl}`);
    
}

function Validation(users){
    const schema =joi.object({
        id : joi.string().required(),
        login : joi.string().required(),
        password : joi.string().alphanum().required(),
        age : joi.number().min(4).max(130).required(),
        isDeleted : joi.boolean().required(),
    });

    const validated = schema.validate(users);
    return validated;
}

router.use("/get/:id",getUserbyId);
router.use("/post",createUser);
router.use("/put/:id",updateUser);
router.use("/delete/:id",removeUser);
router.use("/getAutoSuggestUsers/:loginSubstring/:limit",getAutoSuggestUsers);
router.use("/*",urlHandler);

module.exports={
    router : router
}


