import { PrismaClient } from '@prisma/client';
import IProductRepository from '../interfaces/IProductRepository';
import Product from '../entities/Product';
import CustomError from '../helpers/customError';

export default class ProductRepository implements IProductRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): Promise<Product> {
    try {
      return await this.prisma.product.create({
        data: {
          name: name,
          description: description,
          price: price,
        },
      });
    } catch (e) {
      throw new CustomError("Couldn't create product", 'DatabaseError');
    }
  }
  async getProduct(id: string): Promise<Product | null> {
    try {
      return await this.prisma.product.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new CustomError("Couldn't find product", 'DatabaseError');
    }
  }
  async getProducts(): Promise<Product[]> {
    try {
      return await this.prisma.product.findMany();
    } catch (e) {
      throw new CustomError("Couldn't find products", 'DatabaseError');
    }
  }
  async updateProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): Promise<Product> {
    try {
      return await this.prisma.product.update({
        where: {
          id,
        },
        data: {
          name,
          description,
          price,
        },
      });
    } catch (e) {
      throw new CustomError("Couldn't update product", 'DatabaseError');
    }
  }
  async deleteProduct(id: string): Promise<Product> {
    try {
      return await this.prisma.product.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new CustomError("Couldn't delete product", 'DatabaseError');
    }
  }
}
