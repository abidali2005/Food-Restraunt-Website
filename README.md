GoFood Project Requirements and Functionalities
Overview: GoFood is a full-stack MERN (MongoDB, Express, React, Node.js) application for ordering food online. This project includes both frontend and backend functionalities.

Features:

User authentication (sign up, login)
Browse food items
Place orders
View order history
Requirements:

Node.js
MongoDB
Installation:

Backend:

Clone the repository:

Install dependencies:

Create a .env file in the Backend directory and add your MongoDB connection string:

Start the backend server:

Frontend:

Navigate to the Frontend directory:

Install dependencies:

Start the frontend development server:

Usage:

Backend:

The backend server runs on http://localhost:5000.
API Endpoints:
POST /user/signup: Sign up a new user
POST /user/login: Login an existing user
GET /data: Get food items and categories
POST /api/auth/order: Place an order
Frontend:

The frontend server runs on http://localhost:3000.
Users can browse food items, add them to the cart, and place orders.
Project Structure:

Backend:

index.js: Entry point of the backend server
db.js: MongoDB connection setup
models/: Mongoose models
user.model.js: User schema and model
order.model.js: Order schema and model
routes/: Express routes
user.route.js: User authentication routes
displaydata.route.js: Routes to fetch food items and categories
order.route.js: Order routes
Frontend:

src/: React application source code
components/: React components
pages/: React pages
App.js: Main application component
index.js: Entry point of the React application
Contributing: Contributions are welcome! Please open an issue or submit a pull request.

License: This project is licensed under the Coursera License.
