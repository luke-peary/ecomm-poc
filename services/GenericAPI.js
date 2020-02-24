import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import merge from "lodash/merge";
import queryString from "query-string";

const DEFAULT_ERROR = {
  errorCode: "DEFAULT",
  errorDescription: "Something went wrong"
};

class GenericAPI {
  constructor(option = {}) {}

  async get(endpoint, payload, options) {
    const queryParams = queryString
      .stringify(payload || {})
      .replace(/^(.)/, "?$1");
    return this.genericFetch(
      `${endpoint}${queryParams}`,
      merge({ method: "GET" }, options)
    );
  }

  async post(endpoint, payload = {}) {
    return this.genericFetch(endpoint, {
      method: "POST",
      body: JSON.stringify(payload)
    });
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
          Accept: "application/json",
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
}

export default GenericAPI;
