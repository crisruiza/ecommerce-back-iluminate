const { Schema, model } = require("mongoose");

const UserScheema = Schema(
  {
    nombre: {
      type: String,
      required: [true, "Name is required"],
    },
    apellido: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

module.exports = model("User", UserScheema);
