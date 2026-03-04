import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters"],
      maxlength: [80, "Product name must be at most 80 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be at least 0"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Electronics", "Accessories", "Home", "Office", "Other"],
        message: "Category is not supported",
      },
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

productSchema.methods.applyDiscount = function applyDiscount(percent) {
  const normalized = Math.max(0, Math.min(percent, 100));
  const discounted = this.price - (this.price * normalized) / 100;
  this.price = Math.round(discounted * 100) / 100;
  return this.price;
};

const Product = mongoose.model("Product", productSchema);

export default Product;

