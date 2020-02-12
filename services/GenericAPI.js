import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import merge from 'lodash/merge';
import 'abortcontroller-polyfill';
import queryString from 'query-string';
import { Cookies } from 'react-cookie';
import { COOKIES } from 'helpers/variables';
import { initAnalytic } from '../AnalyticAPI';

const DEFAULT_ERROR = {
  errorCode: 'DEFAULT',
  errorDescription: 'Something went wrong'
};

class GenericAPI {
  controller = new AbortController();
  analyticService = initAnalytic();
  signal = this.controller.signal;
  accessToken = '';

  constructor(option = {}) {
    if (typeof window === 'object') {
      const authTokens = new Cookies(document.cookie).get(COOKIES.BELONG);
      if (authTokens) {
        this.accessToken = authTokens.accessToken;
      }
    }

    if (option.accessToken) {
      this.accessToken = option.accessToken;
    }
  }

  async get(endpoint, payload, options) {
    const queryParams = queryString.stringify(payload || {}).replace(/^(.)/, '?$1');
    return this.genericFetch(`${endpoint}${queryParams}`, merge({ method: 'GET' }, options));
  }

  async post(endpoint, payload = {}) {
    return this.genericFetch(endpoint, { method: 'POST', body: JSON.stringify(payload) });
  }

  async put(endpoint, payload = {}) {
    return this.genericFetch(endpoint, { method: 'PUT', body: JSON.stringify(payload) });
  }

  async patch(endpoint, payload = {}) {
    return this.genericFetch(endpoint, { method: 'PATCH', body: JSON.stringify(payload) });
  }

  abort() {
    this.controller.abort();
  }

  private async genericFetch(endpoint, extendedOptions) {
    const { publicRuntimeConfig } = getConfig();
    const { host, consumerId, apiKey } = publicRuntimeConfig.gateway;
    const { shouldRun } = publicRuntimeConfig.analytic;
    const isPDF = extendedOptions.headers && extendedOptions.headers.Accept === 'application/pdf';
    const options = merge(
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Consumer-ID': consumerId,
          'X-Api-Key': apiKey,
          'X-Correlation-ID': 'wertyu',
          accessToken: this.accessToken
        },
        signal: this.signal
      },
      extendedOptions
    );

    if (shouldRun) this.analyticService.trackAPI(endpoint, 'BEFORE', options);

    const response = await fetch(host + endpoint, options);
    const isOk = response.ok;
    let results;

    if (isPDF) {
      results = response;
    }

    if (!isPDF) {
      const responseJson = await response.json();
      results = !isOk && !responseJson.errorCode ? DEFAULT_ERROR : responseJson;
    }

    if (shouldRun) {
      this.analyticService.trackAPI(endpoint, 'AFTER', results);
    }
    return results;
  }
}

export default GenericAPI;
