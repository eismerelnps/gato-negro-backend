const { body } = require('express-validator');

// Reglas de validación para crear un nuevo producto
exports.createProductValidators = [
  body('category').notEmpty().withMessage('La categoría es requerido'),
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('currency').notEmpty().withMessage('La moneda es requerida'),
  body('price').notEmpty().withMessage('El precio es requerido').isNumeric().withMessage('El precio debe ser numérico'),
];
