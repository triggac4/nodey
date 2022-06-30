const productModel=require('../models/Product');
const { BadRequestError}=require('../errors');
const cloudinary = require('cloudinary').v2
const fs=require('fs');

const uploadProduct = async (req, res) => {
    const {image}=req.files
    if(!image) throw new BadRequestError('image not found');
    const result =await cloudinary.uploader.upload(image.tempFilePath,{folder:"nodeTrial"})
    fs.unlinkSync(image.tempFilePath)
    res.json({image:{src:result.secure_url}});
};

module.exports={
    uploadProduct
}