let arguments = require("minimist")(process.argv.slice(2));
let operands = arguments['_'] , operation=arguments['operation'];


//Main Logic
if(!isValid()){
    console.log("Please enter Valid arguments")
}
else{
    switch(operation){
        case 'addition' : console.log(addition()); break;
        case 'multiplication' : console.log(multiplication()); break;
        case 'subtraction' : console.log(subtraction()); break;
        case 'division' : console.log(division()); break;
    }
}

//function for operands Validation
function isValid(){
    for(let operand of operands){
        if(typeof operand !=="number"){
            return false;
        }
        if(operand<0){
            return true;
        }
    }
    return true;
}

//function for addition
function addition(){
    let ans=0;
    if(operands.length==0 || operands.length==null){
        return "Invalid number of Arguments";
    }
    else{
    for(let i=0;i<operands.length;i++){
        ans=ans+operands[i];
    }
    return ans;
    }
}

//function for Multiplication
function multiplication(){
    if(operands.length==0 || operands.length==null){
        return "Invalid number of Arguments";
    }
    else{
        let ans=1;
        for(let i=0;i<operands.length;i++){
            ans=ans*operands[i];
        }
        return ans;
    }
}

//function for subtraction 
function subtraction(){
    if(operands.length!=2 || operands.length==null){
        return "Invalid number of Arguments";
    }
    else{
        return operands[0]-operands[1];
    }
}

//function for division
function division(){
    if(operands.length!=2 || operands.length==null){
        return "Invalid number of Arguments";
    }
    else{
        return operands[0]/operands[1];
    }
    
}