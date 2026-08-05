import { test, expect } from '../../fixture/apiFixture';

test.describe('Species API Tests', () => {

  test('Get species info', async ({ speciesAPI }) => {
    const response = await speciesAPI.search();

    expect.soft(response.ok).toBeTruthy();
    const responseBody = await response.json();

    expect.soft(responseBody).toHaveProperty('species');
    expect.soft(responseBody).toHaveProperty('page');
    expect.soft(responseBody.page.pageNumber).toBe(0);

    const totalPages = Math.ceil(responseBody.page.totalElements / responseBody.page.pageSize);
    expect.soft(responseBody.page.totalPages).toBe(totalPages);
  });
})