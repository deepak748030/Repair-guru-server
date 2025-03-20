# Repair Guru Server

Welcome to **Repair Guru Server** - a powerful backend solution designed to manage service categories for repair services. This server is built using **Node.js**, **Express.js**, and **MongoDB**.

## 🚀 Features
- ✅ CRUD operations for managing service categories
- ✅ Image upload functionality using **Multer**
- ✅ MongoDB connection with **Mongoose**
- ✅ Error handling and validation
- ✅ Secure API routes with best practices

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Multer** (for image uploads)

---

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/deepak748030/Repair-guru-server.git
    cd Repair-guru-server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=your_mongo_db_connection_string
    ```
4. Start the server:
    ```bash
    npm run dev
    ```
    > The server will run at `http://localhost:3000`

---

## 🖼️ Image Upload
- **Multer** handles image uploads to the `/uploads` directory.
- Supports `.jpg`, `.jpeg`, and `.png` files.
- Max file size: **2MB**.

---

## 🛡️ Error Handling
- Centralized error management for API responses.
- Provides descriptive error messages for invalid inputs and server issues.

---

## 📁 Project Structure
```bash
Repair-guru-server
├── server
│   ├── uploads
│   ├── src
│   │   ├── config
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   ├── controllers
│   │   │   ├── categoryController.js
│   │   ├── models
│   │   │   ├── categoryModel.js
│   │   ├── routes
│   │   │   ├── categoryRoutes.js
│   │   ├── middlewares
│   │   │   ├── uploadMiddleware.js
│   ├── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contact
For any questions or issues, feel free to reach out to **[Deepak Kushwah](https://github.com/deepak748030)**.

**Happy Coding! 🚀**

