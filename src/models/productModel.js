const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'La categoria del producto es obligatorio'],
  },
  name: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
  },
  description: {
    type: String,
  },
  currency: {
    type: String,
    required: [true, 'La moneda del producto es obligatoria'],
  },
  price: {
    type: Number,
    required: [true, 'El precio del producto es obligatorio'],
  },
  offerPrice: {
    type: Number,
    default: 0,
  },
  stocked: {
    type: Boolean,
    default: false,
  },
  inOffer: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Array,
    default: [],
    required: [true, 'La imagen del producto es obligatoria'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
    default: []
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
