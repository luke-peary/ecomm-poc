import GenericAPI from "./GenericAPI";

const endpoint = "http://www.flexycommerce.com/bff";

class ProductAPI extends GenericAPI {
  async getProduct(productId) {
    return this.get(`${endpoint}/product?productId=${productId}`);
  }

  getProducts() {
    return this.get(`${endpoint}/getProducts`);
  }
}

export default new ProductAPI();
