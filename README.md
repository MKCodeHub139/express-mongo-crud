# 🚀 Node.js + Express + MongoDB CRUD API

A simple RESTful API built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**.  
It allows you to perform full **CRUD operations** on user data.

---

## 📚 Features

- ✅ Create a new user
- 📥 Get all users (JSON or HTML list)
- 🔍 Get a user by ID
- ✏️ Update a user by ID (PATCH)
- 🗑️ Delete a user by ID

---

## 🔧 Tech Stack

| Tech        | Description              |
|-------------|--------------------------|
| Node.js     | JavaScript runtime       |
| Express.js  | Backend framework        |
| MongoDB     | NoSQL database           |
| Mongoose    | ODM for MongoDB          |

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/MKCodeHub139/express-mongo-crud.git
cd express-mongo-crud
2. Install dependencies
bash
Copy code
npm install
3. Setup MongoDB
Make sure MongoDB is running locally or change the connection string in this line:

js
Copy code
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
4. Start the server
bash
Copy code
npm start
Server will start on:

arduino
Copy code
http://localhost:8000
📬 API Endpoints
Method	Endpoint	Description
GET	/users	Returns all users in HTML list format
GET	/api/users	Returns all users as JSON
GET	/api/users/:id	Get user by ID
POST	/api/users	Create a new user
PATCH	/api/users/:id	Update user by ID
DELETE	/api/users/:id	Delete user by ID

📦 Sample Request Body (POST / PATCH)
json
Copy code
{
  "first_name": "Kaif",
  "last_name": "Ali",
  "email": "kaif@example.com",
  "job_title": "Backend Developer",
  "gender": "Male"
}
🙋‍♂️ Author
Mohd Kaif
🔗 LinkedIn
💻 GitHub

📃 License
This project is licensed under the MIT License.

💡 Tip
You can test the API using Postman, Thunder Client, or directly from your browser for GET endpoints.

yaml
Copy code

---

### ✅ You're now ready to:

1. Paste this `README.md` into your repo.
2. Commit & push it:
   ```bash
   git add README.md
   git commit -m "Add README"
   git push
✅ Share the GitHub repo on LinkedIn with a short post about your learning experience.

Want help drafting that LinkedIn post too? Let me know. Great job so far! 💪
