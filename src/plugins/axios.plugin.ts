import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

export class Api {
  protected instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || null,
      timeout: import.meta.env.VITE_API_TIMEOUT || 30000,
    });

    this.instance.interceptors.request.use(
      (configs) => this.handleRequestSuccess(configs),
      (error) => this.handleRequestError(error),
    );

    this.instance.interceptors.response.use(
      (response) => this.handleResponseSuccess(response),
      (error) => this.handleResponseError(error),
    );
  }

  protected handleRequestSuccess(configs: InternalAxiosRequestConfig) {
    return configs;
  }

  protected handleRequestError(error: any) {
    return Promise.reject(error);
  }

  protected handleResponseSuccess(response: AxiosResponse) {
    return response;
  }

  protected handleResponseError(error: any) {
    return Promise.reject(error);
  }

  protected async request(
    url: string,
    method: string,
    params: any = {},
    data: any = {},
    configs: AxiosRequestConfig = {},
  ) {
    const requestConfigs: AxiosRequestConfig = { ...configs, url, method, params, data };
    return this.instance.request(requestConfigs);
  }

  public async get(url: string, params: any = {}, configs: AxiosRequestConfig = {}) {
    return this.request(url, "get".toUpperCase(), params, {}, configs);
  }

  public async post(url: string, data: any = {}, configs: AxiosRequestConfig = {}) {
    return this.request(url, "post".toUpperCase(), {}, data, configs);
  }

  public async put(url: string, data: any = {}, configs: AxiosRequestConfig = {}) {
    return this.request(url, "put".toUpperCase(), {}, data, configs);
  }

  public async patch(url: string, data: any = {}, configs: AxiosRequestConfig = {}) {
    return this.request(url, "patch".toUpperCase(), {}, data, configs);
  }

  public async delete(url: string, data: any = {}, configs: AxiosRequestConfig = {}) {
    return this.request(url, "delete".toUpperCase(), {}, data, configs);
  }
}

export const api = new Api();
