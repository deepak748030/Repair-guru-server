# Repair Guru Server

Welcome to the Repair Guru Server! This is a backend service built using **Node.js**, **Express**, and **MongoDB** to manage categories, reviews, comments, and services for a home appliance repair platform.

## Features
- ✅ CRUD Operations for Categories, Reviews, Comments, and Services
- ✅ Image Upload with **Multer**
- ✅ Data Validation using **Mongoose**
- ✅ Efficient Data Management with MongoDB
- ✅ API Error Handling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/deepak748030/Repair-guru-server.git
```

2. Install dependencies:
```bash
cd Repair-guru-server
npm install
```

3. Create a `.env` file and add the following environment variables:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/repairGuru
```

4. Run the server:
```bash
npm run dev
```

## API Endpoints

### Category Routes
- **POST** `/api/categories` - Create a new category
- **GET** `/api/categories` - Get all categories
- **GET** `/api/categories/:id` - Get category by ID
- **PATCH** `/api/categories/:id` - Update category
- **DELETE** `/api/categories/:id` - Delete category

### Service Routes
- **POST** `/api/services` - Create a new service (with image upload)
- **GET** `/api/services` - Get all services
- **GET** `/api/services/:id` - Get service by ID
- **PATCH** `/api/services/:id` - Update service (with image upload)
- **DELETE** `/api/services/:id` - Delete service

### Review Routes
- **POST** `/api/reviews` - Create a new review
- **GET** `/api/reviews` - Get all reviews
- **GET** `/api/reviews/:id` - Get review by ID
- **PATCH** `/api/reviews/:id` - Update review
- **DELETE** `/api/reviews/:id` - Delete review

### Comment Routes
- **POST** `/api/comments` - Create a new comment
- **GET** `/api/comments` - Get all comments
- **GET** `/api/comments/:id` - Get comment by ID
- **PATCH** `/api/comments/:id` - Update comment
- **DELETE** `/api/comments/:id` - Delete comment

## Folder Structure
```bash
Repair-guru-server/
├── public/
│   └── uploads/ (For storing uploaded images)
├── src/
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
└── .env
```

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. We welcome all contributions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
**Made with ❤️ by Deepak Kushwah**
