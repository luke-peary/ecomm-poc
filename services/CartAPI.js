import GenericAPI from "./GenericAPI";
import {endpoint} from "./GenericAPI";

class CartServices extends GenericAPI {
  async addToCart(payload) {
    return await this.post(`${endpoint}/addToCart`, payload);
  }

  async getCart() {
    return await this.get(`${endpoint}/cart`);
  }
}

export default new CartServices();
