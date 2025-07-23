const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    productCategory: { type: String, required: true },
    productStatus: { type: String, default: "In-Stock" },
  },
  { timestamps: true }
);

module.exports = model("product", ProductSchema);