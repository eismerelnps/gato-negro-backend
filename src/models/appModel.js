const mongoose = require("mongoose");

// Definición del esquema de usuario
const appSchema = new mongoose.Schema({
  open: {
    type: Boolean,
  },
});

// Creación del modelo User basado en el esquema
const App = mongoose.model("App", appSchema);

module.exports = App;
