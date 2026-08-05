import { test as base, expect } from '@playwright/test';
import { ProductsApi } from '../api/fakestore/ProductsApi';
import { SpeciesApi } from '../api/stapi/SpeciesApi';

type APIFixtures = {
  productsAPI: ProductsApi;
  speciesAPI: SpeciesApi;
};

export const test = base.extend<APIFixtures>({
  productsAPI: async ({ request }, use) => {
    const productsAPI = new ProductsApi(request);
    await use(productsAPI);
  },
  speciesAPI: async ({ request }, use) => {
    const speciesAPI = new SpeciesApi(request);
    await use(speciesAPI);
  }

});

export { expect };