# Express Clean Architecture Project

## Overview

This project is an implementation of the **Clean Architecture** using **Express.js** and **TypeScript**. The application manages products and follows best practices by organizing code into separate layers such as **Controllers**, **Interactors**, **Repositories**, **Entities**, and **Interfaces**.

## Project Structure

The project is organized into the following structure:

```bash
express-clear-architecture/
├── prisma/                      # Database schema and migrations
│   ├── schema.prisma            # Prisma schema file for DB
│   └── migrations/              # Migration files for Prisma
├── src/
│   ├── controllers/             # Handles HTTP requests
│   │   └── productController.ts
│   ├── entities/                # Domain models
│   │   └── Product.ts
│   ├── helpers/                 # Helper functions and utilities
│   │   ├── handleErrors.ts
│   │   ├── customError.ts
│   │   ├── dbConnection.ts
│   │   └── logger.ts
│   ├── interactors/             # Business logic (Use Cases)
│   │   └── productInteractor.ts
│   ├── interfaces/              # Interfaces for Dependency Inversion
│   │   ├── IProductInteractor.ts
│   │   └── IProductRepository.ts
│   ├── repositories/            # Data persistence layer
│   │   └── productRepository.ts
│   ├── routes/                  # API routes
│   │   └── productRoutes.ts
│   ├── tests/                  # Tests
│   │   └── productInteractor.test.ts
│   └── index.ts                 # Application entry point
├── .env                         # Environment variables
├── .gitignore                   # Files to ignore in version control
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Dependency lock file
├── tsconfig.json                # TypeScript configuration
└── .vscode/                     # VSCode editor settings
    └── settings.json
```

## Dependencies

- **express**: Web framework for Node.js.
- **prisma**: ORM for database interaction.
- **typescript**: For static type-checking in JavaScript.
- **dotenv**: For managing environment variables.
- **nodemon**: Development tool for auto-reloading.
- **@prisma/client**: Prisma client for database connection.

## How to Run the Project

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   Create a `.env` file in the root directory and configure your database connection:

   ```
   DATABASE_URL="your-database-url"
   ```

3. **Run Prisma Migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

4. **Start the Application**:
   ```bash
   npm run dev
   ```

## File Descriptions

- **src/controllers/productController.ts**: Manages HTTP requests and responses.
- **src/interactors/productInteractor.ts**: Contains business logic (use cases) related to products.
- **src/repositories/productRepository.ts**: Handles database interactions for product entities.
- **src/entities/Product.ts**: Defines the `Product` entity with properties like `id`, `name`, `description`, and `price`.
- **src/helpers/handleErrors.ts**: Error handling utility to format error messages.
- **src/interfaces/**: Contains interfaces that define contracts for interactors and repositories.

## Running Tests

To run tests, you would ideally use a testing framework like **Jest**. Since no tests were found in the structure, you can set them up under a `tests/` directory and run them using a script like:

```bash
npm run test
```

## Future Improvements

- Implement unit tests for controllers, interactors, and repositories.
- Add data validation and sanitization.
- Set up CI/CD for automated testing and deployment.

## License

This project is licensed under the MIT License.
