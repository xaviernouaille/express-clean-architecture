import { NextFunction, Request, Response } from 'express';
import IProductInteractor from '../interfaces/IProductInteractor';
import { handleErrors } from '../helpers/handleErrors';
import CustomError from '../helpers/customError';

export class ProductController {
  private productInteractor: IProductInteractor;

  constructor(productInteractor: IProductInteractor) {
    this.productInteractor = productInteractor;
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, description, price } = req.body;
      const product = await this.productInteractor.createProduct(
        id,
        name,
        description,
        price,
      );
      res.status(201).send(product);
    } catch (e) {
      const { status, message } = handleErrors(e as CustomError);
      res.status(status).send(message);
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await this.productInteractor.getProduct(id);
      res.status(200).send(product);
    } catch (e) {
      const { status, message } = handleErrors(e as CustomError);
      res.status(status).send(message);
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productInteractor.getProducts();
      res.status(200).send(products);
    } catch (e) {
      const { status, message } = handleErrors(e as CustomError);
      res.status(status).send(message);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const product = await this.productInteractor.updateProduct(
        id,
        name,
        description,
        price,
      );
      res.status(200).send(product);
    } catch (e) {
      const { status, message } = handleErrors(e as CustomError);
      res.status(status).send(message);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await this.productInteractor.deleteProduct(id);
      res.status(200).send(product);
    } catch (e) {
      const { status, message } = handleErrors(e as CustomError);
      res.status(status).send(message);
    }
  }
}
