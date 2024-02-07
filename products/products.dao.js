const { v4: uuidv4 } = require("uuid");
const Products = require("./products.entity");

const saveProduct = async (productData, done) => {
  try {
    const product = new Products(productData);
    await product.save((err, savedProduct) => {
      if (err) {
        return done("Error saving product");
      }
      return done(null, savedProduct);
    });
  } catch (error) {
    return done("Error saving product");
  }
};

const getProductById = async (productId, done) => {
  try {
    const product = await Products.findOne({ productId: productId });
    return done(null, product);
  } catch (error) {
    return done("Error fetching product by id");
  }
};

const findProductsByQuery = async (query, done) => {
  try {
    const products = await Products.find(query);
    return done(null, products);
  } catch (error) {
    return done("Error getting products");
  }
};

const updateProductDetails = async (productId, updatedData, done) => {
  try {
    const product = await Products.findOneAndUpdate(
      { productId: productId },
      { $set: updatedData },
      { new: true },
      (err, updatedProduct) => {
        if (err) {
          return done("Error updating product");
        }
        return done(null, updatedProduct);
      }
    );
  } catch (error) {
    return done("Error updating product");
  }
};

module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails,
};
