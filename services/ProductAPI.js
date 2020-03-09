import GenericAPI from "./GenericAPI";
import {endpoint} from "./GenericAPI";

class ProductAPI extends GenericAPI {
  async getProduct(productId) {
    return this.get(`${endpoint}/product?productId=${productId}`);
  }

  getProducts() {
    return this.get(`${endpoint}/getProducts`);
  }
}

export default new ProductAPI();
