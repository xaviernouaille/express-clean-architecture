import Product from '../entities/Product';

export default interface IProductInteractor {
  createProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): Promise<Product>;
  getProduct(id: string): Promise<Product | null>;
  getProducts(): Promise<Product[]>;
  updateProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): Promise<Product>;
  deleteProduct(id: string): Promise<Product>;
}
