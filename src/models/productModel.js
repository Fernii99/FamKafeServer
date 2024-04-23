
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
      name: String,
      category: String,
      image: String,
      description: String ,
      shortDescription: String,
    }
);

module.exports = mongoose.model('Product', productSchema)