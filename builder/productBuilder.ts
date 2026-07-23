import { faker } from "@faker-js/faker";

export class ProductBuilder {

  private Id: number | null = null;
  private Title = faker.commerce.productName();
  private Price = faker.commerce.price();
  private Description = faker.commerce.productDescription();
  private Category = faker.commerce.department();
  private Image = faker.image.url();

  withTitle(title: string) {
    this.Title = title;
    return this;
  }

  withPrice(price: string) {
    this.Price = price;
    return this;
  }

  build() {
    return {
      id: this.Id,
      title: this.Title,
      price: this.Price,
      description: this.Description,
      category: this.Category,
      image: this.Image
    };
  }
}