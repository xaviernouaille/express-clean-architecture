import CustomError from '../helpers/customError';

export default class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  constructor(id: string, name: string, description: string, price: number) {
    if (price < 10) {
      throw new CustomError('Price cannot be under 10', 'ValidationError');
    }
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
