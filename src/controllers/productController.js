const Product = require("../models/productModel");
//Importa el paquete express-validator
const { validationResult } = require("express-validator");

// Controlador para obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};
// Controlador para obtener un producto por su ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};
exports.createProduct = async (req, res) => {
  try {
    // Verificar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtén los datos del producto desde el cuerpo de la solicitud
    const {
      category,
      name,
      description,
      currency,
      price,
      offerPrice,
      stocked= false,
      inOffer = false,
      image,
      rating,
      reviews,
    } = req.body;

    // Crea una nueva instancia del modelo Product con los datos del producto
    const newProduct = new Product({
      category,
      name,
      description,
      currency,
      price,
      offerPrice,
      stocked,
      inOffer,
      image,
      rating,
      reviews,
    });

    // Guarda el producto en la base de datos
    await newProduct.save();

    // Envía una respuesta con el producto creado
    res
      .status(201)
      .json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    // En caso de error, envía una respuesta de error
    res.status(500).json({ message: "Error al crear el producto", error });
  }
};
// Controlador para actualizar un producto por su ID
exports.updateProductById = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res
      .status(200)
      .json({
        message: "Producto actualizado exitosamente",
        product: updatedProduct,
      });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};
// Controlador para eliminar un producto por su ID
exports.deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res
      .status(200)
      .json({
        message: "Producto eliminado exitosamente",
        product: deletedProduct,
      });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};
