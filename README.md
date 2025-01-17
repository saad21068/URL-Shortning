# Short URL Service

A simple and efficient URL-shortening service built with Node.js and MongoDB. This project provides a RESTful API for generating short URLs from long ones, along with the ability to redirect users from short URLs to their original destinations.

## Features

- **Shorten URLs**: Generate short URLs for any given long URL.
- **Redirect Functionality**: Redirect users from a short URL to the original URL.
- **Statistics**: (Optional) Track click counts or other metrics for shortened URLs.
- **RESTful API**: Easy integration with other applications or services.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Dependencies**: shortid 
- **Database**: MongoDB

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/): v14.x or higher
- [MongoDB](https://www.mongodb.com/): Local or cloud instance

### Steps

1. **Download the Zip**
   
2. **Create a `package.json` file:**
   Run the following command and follow the prompts to set up your `package.json` file:
   ```bash
   npm init -y
   ```

3. **Install dependencies:**
   Install the required packages using the following commands:
   ```bash
   npm install express mongoose shortid
   ```


4. **Run the application:**
   Start the server with the following command:
   ```bash
   node index.js
   ```

   The service will be available at `http://localhost:8000`.

## API Endpoints

### 1. Create Short URL

**POST** `/api/url/shorten`

- **Description**: Generates a short URL for the provided long URL.
- **Request Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortUrl": "http://localhost:3000/abc123",
    "longUrl": "https://example.com"
  }
  ```

