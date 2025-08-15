import express from "express";
import mongoose from "mongoose";
import fs from "fs";
const app = express();
const port = 8000;

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("error connecting to mongodb", err));

// schema for user
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `<ul>
        ${allDbUsers
          .map((user) => {
            return `<li>${user.firstName} - ${user.email}</li>`;
          })
          .join("")}  
    </ul>`;
  return res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app.post("/api/users/", async (req, res) => {
  //todo create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title ||
    !body.gender
  ) {
    return res
      .status(400)
      .json({
        msg: "Please provide all required fields: first_name, last_name",
      });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log("result", result);
  return res
    .status(201)
    .json({ msg: "User created successfully", user: result });
});
app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
  })
  // PATCH - Update user
  .patch(async (req, res) => {
    const updated = {};
    if (req.body.first_name) updated.firstName = req.body.first_name;
    if (req.body.last) updated.LastName = req.body.first_name;
    if (req.body.email) updated.email = req.body.email;
    if (req.body.job_title) updated.jobTitle = req.body.job_title;
    if (req.body.gender) updated.gender = req.body.gender;
    await User.findByIdAndUpdate(req.params.id, updated, { new: true });

    return res.json({ status: "success" });
  })

  // DELETE - Delete user
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
  });

app.listen(port, () => console.log("server started at port", port));
