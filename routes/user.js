import express from "express";
import { handleGetAllUsers ,hanleCreateUsers,handleGetAllusersById,handleUpdateUsers,handleDeleteUsers} from "../controllers/user.js";
const router =express.Router()

router.route('/')
.get(handleGetAllUsers)
.post(hanleCreateUsers)

router
  .route("/:id")
  .get(handleGetAllusersById)
  .patch(handleUpdateUsers)
  .delete(handleDeleteUsers);

  export default router;