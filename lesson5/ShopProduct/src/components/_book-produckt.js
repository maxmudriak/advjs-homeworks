import ShopProduct from "./shop-product";

function BookProduct(title, price, numPages) {
  this.numPages = numPages;
  ShopProduct.call(this, title, price)
}

BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.getNumPages = function (price) {
  return this.numPages;
};

export default BookProduct;