export default class CustomError extends Error {
  constructor(message: string, name: 'ValidationError' | 'DatabaseError') {
    super(message);
    this.message = `[${name}]: ${message}`;
    this.name = name;
  }
}
