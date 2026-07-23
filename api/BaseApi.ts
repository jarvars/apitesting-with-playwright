import { APIRequestContext, APIResponse } from "@playwright/test";

export class BaseApi {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  private normalize(endpoint: string): string {
    return endpoint.replace(/^\/+/, '');
  }

  async getMethod(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    const response = await this.request.get(this.normalize(endpoint), { headers });
    return response;
  }

  async postMethod(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    const response = await this.request.post(this.normalize(endpoint), {
      data,
      headers
    });

    return response;
  }

  async putMethod(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    const response = await this.request.put(this.normalize(endpoint), {
      data,
      headers
    });

    return response;
  }

  async patchMethod(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    const response = await this.request.patch(this.normalize(endpoint), {
      data,
      headers
    });

    return response;
  }

  async deleteMethod(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    const response = await this.request.delete(this.normalize(endpoint), {
      data,
      headers
    });

    return response;
  }
}