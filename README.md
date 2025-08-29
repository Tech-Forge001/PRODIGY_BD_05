# PRODIGY_BD_05

# 🏨 Hotel Booking API (Task 05)

This project is a **Hotel Booking REST API** built using **Node.js, Express, MySQL, and Sequelize ORM**.  
It allows users to register, login, browse hotels, and make bookings.  

---

## 🚀 Features
- User Authentication (Register/Login with JWT)
- Hotel Management (Add, View, Update Hotels)
- Booking Management (Create & View Bookings)
- Sequelize ORM with MySQL Database
- Password Hashing using bcryptjs
- API tested with Postman

---

## 🛠 Tech Stack
•	Node.js
•	Express.js
•	Sequelize ORM
•	MySQL
•	bcryptjs (Password Hashing)
•	jsonwebtoken (Authentication)
•	dotenv (Environment Variables)
•	cors & body-parser

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/<your-username>/hotel-booking-api.git
cd hotel-booking-api
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory (use .env.example as reference):

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=hotel_db
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the Server
node server.js
or with nodemon:
npx nodemon server.js
✅ Server will start on http://localhost:5000

🗂 API Endpoints
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user & get JWT token

🏨 Hotel Routes
Method	Endpoint	Description
POST	/api/hotels	Add a new hotel
GET	/api/hotels	Get all hotels
GET	/api/hotels/:id	Get hotel by ID

📑 Booking Routes
Method	Endpoint	Description
POST	/api/bookings	Create a booking
GET	/api/bookings	Get all bookings

📝 Testing with Postman
Import the Postman collection (hotel-booking-api.postman_collection.json).(Provided in the repository)

Register a new user → Login → Copy JWT token.

Use token in Authorization → Bearer Token for protected routes.

Add hotels and make bookings.

🗄 Checking Data in MySQL Workbench
Open MySQL Workbench.

Run:

sql
Copy code
USE hotel_db;
SELECT * FROM Users;
SELECT * FROM Hotels;
SELECT * FROM Bookings;
You will see the inserted records from Postman. ✅

📂 Project Structure
lua
Copy code
hotel-booking-api/
│-- config/           # Database config (Sequelize)
│-- models/           # Sequelize Models (User, Hotel, Booking)
│-- routes/           # Express Routes (auth, hotel, booking)
│-- controllers/      # Business Logic
│-- middleware/       # Authentication middleware (JWT)
│-- server.js         # App entry point
│-- package.json
│-- .env.example
│-- README.md
👨💻 Skills Gained
	Building REST APIs with Node.js & Express

	Relational Database Management with MySQL

	ORM handling with Sequelize

	Authentication & Authorization (JWT)

	API Testing with Postman

	Clean Project Structuring

📌 Author
👤 Aastha Pathak
🔗 GitHub: Tech_Forge001



