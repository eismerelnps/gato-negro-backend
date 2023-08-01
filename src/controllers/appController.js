
// Importa el modelo de aplicacion
const App = require("../models/appModel");

// Controlador para obtener el estado de la app
exports.getAppState = async (req, res) => {
    try {
      const app = await App.find();
      res.status(200).json(app);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el estado de la app", error });
    }
  };