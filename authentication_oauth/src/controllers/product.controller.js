

const express = require('express');
const Product = require('../models/product.model');
const authenticate = require('../middleware/authenticate');
const authorise = require('../middleware/authorise')

// const Product = require('../models/product.model');

const router = express.Router();

router.post("/",authenticate,async function(req,res){
 try{
        const productdata = await Product.create(req.body)
        return res.status(200).send(productdata)
 }
    catch(err) {
    return res.status(400).send({message:err.message});
}
})

router.get("/",authenticate,async function(req,res){
 try{
        const productdata = await Product.find()
        return res.status(200).send(productdata)
 }
    catch(err) {
    return res.status(400).send({message:err.message});
}
})

router.patch("/:id",authenticate,authorise(["admin","seller"]),async function(req,res){
 try{

       //   const productdata = await Product.findById(req.params.id).lean().exec()

        const productdata = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
       console.log(req.params.id ,"id")
        console.log("patch1:",productdata)
        return res.status(200).send(productdata)
 }
    catch(err) {
    return res.status(400).send({message:err.message});
}
})

module.exports = router
