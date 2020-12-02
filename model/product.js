var mongoose=require("mongoose");

var productSchema=mongoose.Schema({

    name:String,
    seats:String,
    food:String,
    drink:String,
});

var Product=mongoose.model("member",productSchema);
module.exports=Product;