const productModel=require('../models/Product');
const { BadRequestError}=require('../errors');
const path=require('path');


const uploadProduct = async (req, res) => {
    const {image}=req.files
    if(!image) throw new BadRequestError('image not found');
    const imagePath=path.join(__dirname,"../public/uploads/"+image.name);
    await image.mv(imagePath);
    res.json({image:{src:'uploads/'+image.name}});
};

module.exports={
    uploadProduct
}