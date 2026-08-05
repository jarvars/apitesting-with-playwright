import { DataFactory } from '../../data/factory';
import { test, expect } from '../../fixture/apiFixture';

test.describe('Products API Tests', () => {

  test('Get Products info', async ({ productsAPI }) => {
    const response = await productsAPI.getAll();

    expect(response.ok).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toBeInstanceOf(Array);
  });

  test('Get Product by ID', async ({ productsAPI }) => {
    const productId = 1;

    const response = await productsAPI.getById(productId);

    expect(response.ok).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', productId);
  });

  test('Create Product', async ({ productsAPI }) => {
    const newProduct = DataFactory.product();

    const response = await productsAPI.create(newProduct);

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    newProduct.id = responseBody.id;
    expect(responseBody).toMatchObject(newProduct);
  });

  test('Update Product', async ({ productsAPI }) => {
    const productId: number = 1;
    const updatedProduct = DataFactory.product((b) => b
      .withTitle('Updated Product Title')
      .withPrice('99.99'));

    const response = await productsAPI.update(productId, updatedProduct);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', productId);
    updatedProduct.id = productId;
    expect(responseBody).toMatchObject(updatedProduct);
  });

  test('Delete Product', async ({ productsAPI }) => {
    const productId: number = 1;
    const response = await productsAPI.delete(productId);

    expect(response.status()).toBe(200);
  });
})