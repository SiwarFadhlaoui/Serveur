const { request } = require("express");
const product = require("../models/product")


module.exports.getallproducts = async (req,res)=>{

try{
    const products= await product.find();
    return res.status(200).json(products);
}
catch(err) {
    return res.status(404).json({msg: 'Not Found'});
}

}


module.exports.saveproduct= (req,res)=>{
const {name,description,price}= req.body    
const produit = new product ({
    name: name ,
    description: description,
    price: price,
}) 
 produit.save().then(()=>{
    return res.status(200).json({msg:"added"})

 })
 .catch((err)=>{
    return res.status(404).json({msg:"not added"})
 })

 }
 module.exports.findproductbyid= async (req, res)=>{
 const {id}= req.params

    try{
       // const productid= await product.find({_id:"643680470169d8a3a623eba1"});
       //const productid= await product.findOne({_id:"643680470169d8a3a623eba1"});
        const productid= await product.findById(id);
        return res.status(200).json(productid);
    }
    catch(err) {
        return res.status(404).json({msg: 'Not Found'});
    }
    
 }

 module.exports.removeproduct= async (req,res)=>{
    const {id}= req.params
    /*product.findOneAndDelete({_id:id})
    .then(()=>{
        return res.status(200).json({msg:"removed"})
    })
    .catch(()=>{
        return res.status(404).json({msg:" not removed"})
    })*/

    const produit= await product.findById(id)
    if (produit){
    product.findByIdAndDelete(id).then(()=>{
        return res.status(200).json({msg:"removed"})
    })
    .catch(()=>{
        return res.status(404).json({msg:" not removed"})
    })}
    else{
        return res.status(404).json({msg:" not removed"})
    }
} 
