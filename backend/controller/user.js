const userCollection = require("../models/Product");
const bcrypt = require("bcrypt");

const regDataController =async(req,res)=>{
    try {
    const {fName ,email ,pass}=req.body;

    if(!fName || !email || !pass){
      return res.status(400).json({message:"All feilds are required"});
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

module.exports={
    regDataController,
};