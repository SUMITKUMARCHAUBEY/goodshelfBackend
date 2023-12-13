const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    rate:Number,
    unit:String,
    tag:String,
    desc:String,
    imgLink:String
})
const Product =mongoose.model('Product',productSchema);
module.exports=Product;