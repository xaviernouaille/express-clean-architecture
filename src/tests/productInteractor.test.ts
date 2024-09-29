import CustomError from '../helpers/customError';
import prisma from '../helpers/dbConnection';
import ProductInteractor from '../interactors/productInteractor';
import ProductRepository from '../repositories/productRepository';

jest.mock('../repositories/productRepository');

describe('Product Interactor', () => {
  let productInteractor: ProductInteractor;
  let productRepositoryMock: jest.Mocked<ProductRepository>;

  beforeEach(() => {
    productRepositoryMock = new ProductRepository(
      prisma,
    ) as jest.Mocked<ProductRepository>;
    productInteractor = new ProductInteractor(productRepositoryMock);
  });

  test('create product', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    };

    productRepositoryMock.createProduct.mockResolvedValue(product);

    const result = await productInteractor.createProduct(
      product.id,
      product.name,
      product.description,
      product.price,
    );

    expect(result).toEqual({
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    });

    expect(productRepositoryMock.createProduct).toHaveBeenCalledWith(
      product.id,
      product.name,
      product.description,
      product.price,
    );
  });

  test('create product with wrong input data', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 8,
    };

    productRepositoryMock.createProduct.mockResolvedValue(product);

    const result = productInteractor.createProduct(
      product.id,
      product.name,
      product.description,
      product.price,
    );

    const expectedError = new CustomError(
      "Couldn't create product",
      'ValidationError',
    );

    await expect(result).rejects.toThrow(expectedError);
  });

  test('get product', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    };

    productRepositoryMock.getProduct.mockResolvedValue(product);

    const result = await productInteractor.getProduct(product.id);

    expect(result).toEqual({
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    });

    expect(productRepositoryMock.getProduct).toHaveBeenCalledWith(product.id);
  });

  test('get products', async () => {
    const products = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
      },
    ];

    productRepositoryMock.getProducts.mockResolvedValue(products);

    const result = await productInteractor.getProducts();

    expect(result).toEqual([
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
      },
    ]);

    expect(productRepositoryMock.getProducts).toHaveBeenCalled();
  });

  test('update product', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    };

    productRepositoryMock.updateProduct.mockResolvedValue(product);

    const result = await productInteractor.updateProduct(
      product.id,
      product.name,
      product.description,
      product.price,
    );

    expect(result).toEqual({
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    });

    expect(productRepositoryMock.updateProduct).toHaveBeenCalledWith(
      product.id,
      product.name,
      product.description,
      product.price,
    );
  });

  test('update product with wrong input data', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 8,
    };

    productRepositoryMock.updateProduct.mockResolvedValue(product);

    const result = productInteractor.updateProduct(
      product.id,
      product.name,
      product.description,
      product.price,
    );

    const expectedError = new CustomError(
      "Couldn't update product",
      'ValidationError',
    );

    await expect(result).rejects.toThrow(expectedError);
  });

  test('delete product', async () => {
    const product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 8,
    };

    productRepositoryMock.deleteProduct.mockResolvedValue(product);

    const { id: productId } = product;

    const result = await productInteractor.deleteProduct(productId);

    expect(result).toEqual(product);

    expect(productRepositoryMock.deleteProduct).toHaveBeenCalledWith(productId);
  });
});
