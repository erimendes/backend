const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Adicione esta linha para garantir a unicidade do email
  },
  password: {
    type: String,
    required: true,
    select: false, // Não selecione o campo por padrão
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
  },
});

module.exports = model("admins", adminSchema);
