import { ProductBuilder } from "../builder/productBuilder";

export class DataFactory {

  static product(builder?: (b: ProductBuilder) => ProductBuilder) {
    const b = new ProductBuilder();
    return builder ? builder(b).build() : b.build();
  }
}