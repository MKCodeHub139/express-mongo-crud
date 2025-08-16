import User from "../models/user.js";
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function hanleCreateUsers(req, res) {
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
    return res.status(400).json({
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
}
async function handleGetAllusersById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404 ).json({ msg: "User not found" });
    }
    return res.json(user);
}
async function handleUpdateUsers(req,res){
    const updated = {};
    if (req.body.first_name) updated.firstName = req.body.first_name;
    if (req.body.last) updated.LastName = req.body.first_name;
    if (req.body.email) updated.email = req.body.email;
    if (req.body.job_title) updated.jobTitle = req.body.job_title;
    if (req.body.gender) updated.gender = req.body.gender;
    await User.findByIdAndUpdate(req.params.id, updated, { new: true });

    return res.json({ status: "success" });
}
async function handleDeleteUsers(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}
export { handleGetAllUsers, hanleCreateUsers,handleGetAllusersById,handleUpdateUsers ,handleDeleteUsers};
