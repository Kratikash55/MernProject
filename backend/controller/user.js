const userCollection = require("../models/user");
const productCollection = require("../models/Product");
const queryCollections = require("../models/query");
const bcrypt = require("bcrypt");

const regDataController =async(req,res)=>{
    try {
    const {fName ,email ,pass}=req.body;

    if(!fName || !email || !pass){
      return res.status(400).json({message:"All feilds are required"});
    }

    const emailExit = await userCollection.findOne({userEmail :email });

    if(emailExit){
        res.status(400).json({message:"Email already register"});
    }

    const hashPassword = await bcrypt.hash(pass,10);
    
    const record = new userCollection({
     userName: fName,
    userEmail: email,
    userPass: hashPassword,
    });

    await record.save();
    res.status(200).json({message:"successfully Register"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error "})
    }
   
};

const loginDataController=async (req,res)=>{
    try {
        const {loginEmail ,loginPass} = req.body;
    const userCheck = await userCollection.findOne({userEmail:loginEmail});

    if(!userCheck){
        return res.status(400).json({message:"user Not found ....!"});
    }

    const matchPass = await bcrypt.compare(loginPass,userCheck.userPass);

    if(!matchPass){
        return res.status(400).json({message:"Invaild Credentials"});
    }
    res.status(200).json({message:"Successfully Login",data:userCheck});
    } catch (error) {
          res.status(500).json({message:"Internal Server Error "});
    }
    
}

const userAllProducts = async (req,res)=>{
    try {
      const record = await productCollection.find({productStatus : "In-Stock"});
      res.status(200).json({data:record});
    } catch (error) {
       res.status(500).json ({message : "Internal Server Error"})
    }
}

const userQueryController = async (req,res)=>{
    try {
        const {userName ,userEmail ,userQuery} = req.body;
    const record = new queryCollections({
    Name: userName,
    Email: userEmail,
    Query: userQuery,
    });
    await record.save();
    res.status(200).json({message:"Successfully Submit Your Query...."});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error..."});
    }
}

module.exports={
    regDataController,
    loginDataController,
    userAllProducts,
    userQueryController,
};