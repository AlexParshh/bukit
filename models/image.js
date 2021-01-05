
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ImageSchema = new Schema({
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
const ImageModel = mongoose.model("images", ImageSchema);

module.exports = {ImageSchema:ImageSchema, Image: ImageModel}
