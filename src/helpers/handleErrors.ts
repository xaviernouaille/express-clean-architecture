import CustomError from './customError';

export const handleErrors = (error: CustomError) => {
  switch (error.name) {
    case 'ValidationError':
      return { status: 400, message: error.message };
    case 'DatabaseError':
      return { status: 500, message: error.message };
    default:
      return { status: 500, message: 'Internal Server Error' };
  }
};

export function handleUseCaseError(e: CustomError, message: string) {
  if (e instanceof CustomError && e.name === 'DatabaseError') {
    return e;
  }
  return new CustomError(message, 'ValidationError');
}
