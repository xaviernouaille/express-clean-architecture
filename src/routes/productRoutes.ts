import express from 'express';
import { ProductController } from '../controllers/productController';
import ProductRepository from '../repositories/productRepository';
import ProductInteractor from '../interactors/productInteractor';
import prisma from '../helpers/dbConnection';

const router = express.Router();

const productRepository = new ProductRepository(prisma);

const productInteractor = new ProductInteractor(productRepository);

const productController = new ProductController(productInteractor);

router.post('/', productController.createProduct.bind(productController));
router.get('/', productController.getProducts.bind(productController));
router.get('/:id', productController.getProduct.bind(productController));
router.put('/:id', productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));

export default router;
