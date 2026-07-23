import { test as base, expect } from '@playwright/test';
import { ProductsApi } from '../api/ProductsApi';

type APIFixtures = {
  productsAPI: ProductsApi;
};

export const test = base.extend<APIFixtures>({
  productsAPI: async ({ request }, use) => {
    const productsAPI = new ProductsApi(request);
    await use(productsAPI);
  }

});

export { expect };