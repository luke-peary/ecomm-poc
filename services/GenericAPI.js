import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import merge from "lodash/merge";
import queryString from "query-string";
import axios from "axios";

const DEFAULT_ERROR = {
  errorCode: "DEFAULT",
  errorDescription: "Something went wrong"
};


export const endpoint = "https://www.flexycommerce.com/bff";
//export const endpoint = "http://localhost:8180";

class GenericAPI {
  constructor(option = {}) {}

  async get(endpoint, payload, options) {
    const queryParams = queryString
    .stringify(payload || {})
    .replace(/^(.)/, "?$1");
    return this.axiosFetch(
      `${endpoint}${queryParams}`,
      merge({ method: "GET", withCredentials: true }, options)
    );
  }

  async post(endpoint, payload = {}) {
    return this.axiosFetch(`${endpoint}`,{ method: "POST", data: payload, withCredentials: true }
    );
  }

  async put(endpoint, payload = {}) {
    return this.genericFetch(endpoint, {
      method: "PUT",
      body: JSON.stringify(payload)
    });
  }

  async patch(endpoint, payload = {}) {
    return this.genericFetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(payload)
    });
  }

  async genericFetch(endpoint, extendedOptions) {
    const { publicRuntimeConfig } = getConfig();
    const options = merge(
      {
        // mode: "no-cors",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        }
      },
      extendedOptions
    );

    const response = await fetch(endpoint, options);
    const isOk = response.ok;
    
    let results;

    const responseJson = await response.json();
    results = !isOk && !responseJson.errorCode ? DEFAULT_ERROR : responseJson;

    return results;
  }

  async axiosFetch(endpoint, extendedOptions) {

    console.log("building axios options: " + extendedOptions)
    const options = merge(
      {
        url: endpoint,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      },
      extendedOptions
    );

    console.log("calling axios: " + endpoint)
    const response = await axios(options);
    console.log("response from axios: " + response.data)
    return response.data
  }
}

export default GenericAPI;
