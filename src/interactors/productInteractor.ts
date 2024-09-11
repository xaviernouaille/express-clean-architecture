import Product from '../entities/Product';
import CustomError from '../helpers/customError';
import { handleUseCaseError } from '../helpers/handleErrors';
import IProductInteractor from '../interfaces/IProductInteractor';
import IProductRepository from '../interfaces/IProductRepository';

export default class ProductInteractor implements IProductInteractor {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    try {
      const product = new Product(id, name, description, price);
      return await this.productRepository.createProduct(
        product.id,
        product.name,
        product.description,
        product.price,
      );
    } catch (e) {
      throw handleUseCaseError(e as CustomError, "Couldn't create product");
    }
  }
  async getProduct(id: string) {
    try {
      return await this.productRepository.getProduct(id);
    } catch (e) {
      throw handleUseCaseError(e as CustomError, "Couldn't find product");
    }
  }
  async getProducts() {
    try {
      return await this.productRepository.getProducts();
    } catch (e) {
      throw handleUseCaseError(e as CustomError, "Couldn't find products");
    }
  }
  async updateProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    try {
      const product = new Product(id, name, description, price);
      return await this.productRepository.updateProduct(
        product.id,
        product.name,
        product.description,
        product.price,
      );
    } catch (e) {
      throw handleUseCaseError(e as CustomError, "Couldn't update product");
    }
  }
  async deleteProduct(id: string) {
    try {
      return await this.productRepository.deleteProduct(id);
    } catch (e) {
      throw handleUseCaseError(e as CustomError, "Couldn't delete product");
    }
  }
}
