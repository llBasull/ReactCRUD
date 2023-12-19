# CRUD App with React, Express, and MongoDB

This project is a simple CRUD (Create, Read, Update, Delete) application built using React for the front end, Express for the backend, and MongoDB as the database.

## Features

- Create: Add new items to the database.
- Read: View the existing items from the database.
- Update: Modify the details of existing items.
- Delete: Remove items from the database.

## Technologies Used

- **Frontend**: React
- **Backend**: Express
- **Database**: MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-crud-app.git
2.Navigate to the project directory:

bash
Copy code
cd your-crud-app
Install dependencies for both frontend and backend:

bash
Copy code
cd client && npm install
cd ../server && npm install

## Configuration
Create a .env file in the server directory with the following variables:

env
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database-name
Adjust the MONGODB_URI to match your MongoDB configuration.

## Usage
Start the backend server:

bash
Copy code
cd server && npm start
In a separate terminal, start the frontend development server:

bash
Copy code
cd client && npm start
Open your browser and visit http://localhost:3000 to interact with the CRUD app.

## Contributing
Feel free to contribute by opening issues or creating pull requests.

## License
This project is licensed under the MIT License.

