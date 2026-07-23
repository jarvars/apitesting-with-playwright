import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class ProductsApi extends BaseApi {
  private readonly endpoint = "products";

  constructor(request: APIRequestContext) {
    super(request);
  }

  async getAll(): Promise<APIResponse> {

    return this.getMethod(this.endpoint);
  }

  async getById(id: number): Promise<APIResponse> {
    return this.getMethod(`${this.endpoint}/${id}`);
  }

  async create(product: object): Promise<APIResponse> {
    return this.postMethod(this.endpoint, product);
  }

  async update(id: number, product: object): Promise<APIResponse> {
    return this.putMethod(`${this.endpoint}/${id}`, product);
  }

  async delete(id: number): Promise<APIResponse> {
    return this.deleteMethod(`${this.endpoint}/${id}`);
  }
}