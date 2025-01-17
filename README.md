# Short URL Service

A simple and efficient URL-shortening service built with Node.js and MongoDB. This project provides a RESTful API for generating short URLs from long ones, along with the ability to redirect users from short URLs to their original destinations.

## Features

- **Shorten URLs**: Generate short URLs for any given long URL.
- **Redirect Functionality**: Redirect users from a short URL to the original URL.
- **Statistics**: (Optional) Track click counts or other metrics for shortened URLs.
- **RESTful API**: Easy integration with other applications or services.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Dependencies**: Refer to `package.json` for the full list of dependencies.

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/): v14.x or higher
- [MongoDB](https://www.mongodb.com/): Local or cloud instance

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/short-url.git
   cd short-url
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/shorturl
   BASE_URL=http://localhost:3000
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

   The service will be available at `http://localhost:3000`.

## API Endpoints

### 1. Create Short URL

**POST** `/api/url/shorten`

- **Description**: Generates a short URL for the provided long URL.
- **Request Body**:
  ```json
  {
    "longUrl": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortUrl": "http://localhost:3000/abc123",
    "longUrl": "https://example.com"
  }
  ```

### 2. Redirect to Original URL

**GET** `/:code`

- **Description**: Redirects the user from a short URL to its corresponding long URL.
- **Response**: HTTP redirect to the original URL.

## Folder Structure

```
short-url/
├── node_modules/         # Project dependencies
├── public/               # Static files (if any)
├── routes/               # API route handlers
├── models/               # Database models (e.g., URL schema)
├── .env                  # Environment variables (not included in Git)
├── package.json          # Project metadata and scripts
├── server.js             # Application entry point
└── README.md             # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch and create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Inspiration for the project from various URL-shortening services.
- Community contributions and feedback.
