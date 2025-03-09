# GoFood Frontend

## Overview

GoFood is a food ordering application that allows users to browse food items, add them to their cart, and place orders. This frontend application is built using React and communicates with a backend server to fetch data and handle user actions.

## Features

- User authentication (login and signup)
- Browse food items by category
- Add food items to the cart
- Update cart items
- Checkout and place orders
- Fetch and display user's current location

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/abidali2005/gofood-frontend.git
   cd gofood-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure

- `src/components`: Contains reusable components such as Navbar, Card, and Modal.
- `src/screens`: Contains page components such as Home, Login, Signup, and Cart.
- `src/context`: Contains context and reducer for managing cart state.
- `src/index.js`: Entry point of the application.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:
```
REACT_APP_API_URL=http://localhost:5000
```

## Usage

1. Open the application in your browser at `http://localhost:5173`.
2. Sign up or log in to your account.
3. Browse food items and add them to your cart.
4. Update cart items if needed.
5. Proceed to checkout to place your order.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the Coursera License.