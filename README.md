# The Platform - Educational Web Application

![The Platform logo cover](https://github.com/user-attachments/assets/7c9c9ea6-83e2-4631-8527-7d24146612c5)

**The Platform** is an innovative e-learning web application designed to empower content creators and learners. It allows creators to host and monetize their courses while enabling students to enroll, learn, and grow. This project was developed as a capstone project for the **MEAN Stack course** at the **NTI Institute**.

---

## Features

- **For Content Creators:**
  - Host and manage courses.
  - Monetize content through student enrollments.
  - Track course performance and earnings.

- **For Students:**
  - Browse and enroll in courses.
  - Access course materials (videos, quizzes, assignments).
  - Track learning progress.

- **General Features:**
  - User authentication (login/signup).
  - Secure payment integration.
  - Responsive and user-friendly design.

---

## Technologies Used

The Platform is built using the **MEAN Stack** and other modern technologies:

- **Frontend:**
  - **Angular**: For building a dynamic and responsive user interface.
  - **HTML5/CSS3**: For structuring and styling the application.
  - **Bootstrap**: For responsive design and pre-built UI components.

- **Backend:**
  - **Node.js**: For server-side logic.
  - **Express.js**: For building RESTful APIs.
  - **MongoDB**: For database management (NoSQL).
  - **Mongoose**: For object data modeling (ODM) with MongoDB.

- **Authentication & Security:**
  - **JSON Web Tokens (JWT)**: For secure user authentication.
  - **Bcrypt**: For password hashing and encryption.

- **Payment Integration:**
  - **Stripe**: For secure payment processing.

- **Development Tools:**
  - **Git/GitHub**: For version control and collaboration.
  - **Postman**: For API testing.
  - **Nodemon**: This is for automatic server restarts during development.

---

## Installation

To run The Platform locally, follow these steps:

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/your-username/the-platform.git
   cd the-platform
   ```
2. **Install dependencies:**

    ```bash
    npm install
    cd frontend
    npm install
    ```
3. **Set up environment variables:**

   - Create a ```.env``` file in the root directory.
   - Add the following variables:
  
     ```
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

4. **Run the application:**

   - Start the backend server:
  
     ```bash
      npm run start
     ```
   - Start the frontend development server:
  
     ```bash
      cd frontend
      ng serve
     ```

5. **Access the application:**

   - Open your browser and navigate to ```http://localhost:4200```.


---

## Screenshots


  ![The Platform homepage](https://github.com/user-attachments/assets/74eeb832-0c7b-47fc-b554-b470fd8b669a)

  ![The Platform course page](https://github.com/user-attachments/assets/e48a90e9-4264-452e-afe5-11e176620347)

  ![image](https://github.com/user-attachments/assets/9b22027d-d27a-4708-bbef-12ffe194f738)

  ![The Platform Dashboard](https://github.com/user-attachments/assets/a89063f9-7ad8-4383-a6fc-b5413efc2894)


---

## Contributing

**Contributions are welcome! If you'd like to contribute to The Platform, please follow these steps:**

1. Fork the repository.
2. Create a new branch (```git checkout -b feature/YourFeatureName```).
3. Commit your changes (```git commit -m 'Add some feature'```).
4. Push to the branch (```git push origin feature/YourFeatureName```).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- **NTI Institute**: For providing the MEAN Stack course and guidance.
- **Instructor**: For their support and mentorship throughout the project.
- **Open Source Community**: For the amazing tools and libraries that made this project possible.
- **DeepSeek**: For everything ;)

---

## Contact

For questions or feedback, feel free to reach out: 

- email: ```mohammed.kh384@gmail.com```.

---

**Happy Learning! 🚀**

