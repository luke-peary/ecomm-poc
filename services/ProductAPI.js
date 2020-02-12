// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();
// const { host, consumerId, apiKey } = publicRuntimeConfig.gateway;

const endpoint = "https://35.247.189.41";
const headers = {};

class ProductAPI {
  async getProduct(productId) {
    return this.get(`/product?productId=${productId}/`);
  }

  async getProducts() {
    return await (
      await fetch(`${endpoint}/bff/getProducts`, {
        method: "GET",
        rejectUnauthorized: false
      })
    ).json();
  }
}

export default new ProductAPI();
