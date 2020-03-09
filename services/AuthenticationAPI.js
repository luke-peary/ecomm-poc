import {endpoint} from "./GenericAPI";
import GenericAPI from "./GenericAPI";

class AuthenticationServices extends GenericAPI {
  async signin(payload) {
    return await this.post(`${endpoint}/login`, payload);
  }
}

export default new AuthenticationServices();
