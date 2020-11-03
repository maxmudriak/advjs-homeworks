import ShopProduct from "./shop-product";

function CDProduct(title, price, playLenght) {
  this.playLenght = playLenght;
  ShopProduct.call(this, title, price);
}

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLenght = function () {
  return this.playLenght;
};

export default CDProduct;