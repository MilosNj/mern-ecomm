# Simple eCommerce Admin App

This project is a basic eCommerce admin application with product management functionality. It allows users to add, delete, edit, and view products.

## Features

- Add new products
- Delete existing products
- Edit product details
- View all products

## Tech Stack

### Backend
- JavaScript
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemon (for development)
- cross-env (for environment variable management)

### Frontend
- JavaScript
- React
- React Router
- Vite (as build tool)
- ChakraUI (for styling)
- React Icons
- Zustand (for state management)
- ESLint (for code linting)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/MilosNj/mern-ecomm.git
   cd mern-ecomm
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd frontend/
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5050
   ```

### Running the Application

1. Start the backend server:
   ```
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend/
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## API Endpoints

- `GET /api/products`: Fetch all products
- `POST /api/products`: Add a new product
- `PATCH /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## License

This project is licensed under the MIT License.
