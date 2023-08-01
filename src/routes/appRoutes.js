// appRoutes.js

const express = require('express');
const appController = require('../controllers/appController');

const router = express.Router();

// Ruta para optener el estado de la aplicacion
router.get('/', appController.getAppState );

// // Ruta para autenticacion de un usuario
// router.post('/', userController.login);

// Ruta para actualizar un usuario por su ID
router.put('/:id',  );

module.exports = router;
