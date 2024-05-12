import express from "express";
import {
  getSection4,
  postSection4,
  deleteSection4,
} from "../controller/section4Controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/postSection4", isPatientAuthenticated, postSection4);
router.get("/getSection4", isAdminAuthenticated, getSection4);
router.delete("/deleteSection4/:id", isAdminAuthenticated, deleteSection4);

export default router;
