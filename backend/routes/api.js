const api = require("express").Router();
const userController =require("../controller/user");
const adminController = require("../controller/admin");

api.get("/",(req,res)=>{
    res.send("Hello Backend");
});

api.post("/regdata",userController.regDataController);

api.post("/loginuser",userController.loginDataController);

api.post("/addadminproduct",adminController.addadminProductController);

api.get("/getproduct",adminController.getAllProductController);

api.delete("/productdelete/:id",adminController.getDeleteProductController);

api.get("/editValueData/:abc",adminController.editValueDtataController);

api.put("/productupdate/:abc",adminController.updateProductController);

api.get("/userproducts",userController.userAllProducts);

api.post("/userquery",userController.userQueryController);

api.get("/userAllQuery",adminController.userAllQueryController);

api.delete("/deletequery/:abc",adminController.deleteQueryController);

api.get("/querysingledata/:abc",adminController.singlequeryController);

module.exports = api; 