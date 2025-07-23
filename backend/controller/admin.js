const productCollection = require("../models/Product");
const QueryCollection = require("../models/query");

const addadminProductController = async (req,res) => {
    try {
    const { Pname ,price ,cat } = req.body;

    if(!Pname || !price || !cat){
        return res.status(400).json({message:"All Fields are required"});
    }
    const record = new productCollection({
    productName:Pname,
    productPrice: price,
    productCategory:cat,
    });

    await record.save();
    res.status(200).json({message:"Successfully Insert Product"});
    } catch (error) {
        res.stauts(500).json({message:"Internal Server Error"});
    }
}

const getAllProductController = async (req,res)=>{
    try {
        const record = await productCollection.find();
        res.status(200).json({data : record});
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"});
    }
}

const getDeleteProductController=async(req,res)=>{
    try {
        const id = req.params.id;
        await productCollection.findByIdAndDelete(id);
        res.status(200).json({message:"successfully Delete"});
    } catch (error) {
        res.status(500).json({message:"Internal Sever Error"});
    }
}

const editValueDtataController= async(req,res)=>{
    try {
    const id =req.params.abc; 
    const record = await productCollection.findById(id);
    res.status(200).json({data:record});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

const updateProductController = async (req,res)=>{
    try {
    const {Pname , Pprice , cat , Pststus} = req.body;
    const id = req.params.abc;

    await productCollection.findByIdAndUpdate(id,{
    productName: Pname,
    productPrice: Pprice,
    productCategory: cat,
    productStatus: Pstatus,
    });
    res.status(200).json({message : "Successfully Update"});
    } catch (error) {
        res.status(500).json({ message : "Internal Server Error"});
    }
   
}

const userAllQueryController = async (req,res)=>{
    try {
    const record = await QueryCollection.find();
    res.status(200).json({data : record});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

const deleteQueryController = async(req,res)=>{
    try {
        const id = req.params.abc;
        await QueryCollection.findByIdAndDelete(id);
        res.status(200).json({message:"successfully Delete..."});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error.."});
    }
}

const singlequeryController = async (req, res) => {
  try {
    const id = req.params.abc;
    const record = await queryCollection.findById(id);
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports ={
     addadminProductController,
     getAllProductController,
     getDeleteProductController,
     editValueDtataController,
     updateProductController,
     userAllQueryController,
     deleteQueryController,
     singlequeryController,
};