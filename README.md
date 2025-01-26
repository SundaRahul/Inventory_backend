# Inventory Management Backend

This is the backend part of the Inventory Management application, built with Node.js, Express, and MongoDB. The backend provides APIs to manage items in the inventory, including CRUD operations (Create, Read, Update, Delete).

## Features

- **Get all items**: Fetch all items in the inventory.
- **Add new item**: Add a new item to the inventory.
- **Update an item**: Update the details of an existing item.
- **Delete an item**: Delete an item from the inventory.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database for storing inventory data.
- **Mongoose**: MongoDB object modeling for Node.js.

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (either local or cloud-based)

### Steps to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/inventory-backend.git
    cd inventory-backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the project and add your MongoDB URI:
    ```bash
    MONGO_URI=your-mongodb-connection-uri
    ```

4. Run the application:
    ```bash
    npm start
    ```

   This will start the server on `http://localhost:5000`.

## API Endpoints

### 1. **GET /api/items**
Fetch all items from the inventory.

- **Response**: A list of items.

### 2. **POST /api/items**
Add a new item to the inventory.

- **Body** (JSON):
    ```json
    {
      "name": "Item Name",
      "category": "Item Category",
      "quantity": 10
    }
    ```

- **Response**: The created item.

### 3. **PUT /api/items/:id**
Update an existing item in the inventory.

- **Body** (JSON):
    ```json
    {
      "name": "Updated Item Name",
      "category": "Updated Category",
      "quantity": 20
    }
    ```

- **Response**: The updated item.

### 4. **DELETE /api/items/:id**
Delete an item from the inventory.

- **Response**: A success message or an error message if the item is not found.


If you have any questions or issues, feel free to open an issue or reach out to me.
