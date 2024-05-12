import express from "express";
import {
  getSection1,
  postSection1,
  deleteSection1,
} from "../controller/section1Controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/postSection1", isPatientAuthenticated, postSection1);
router.get("/getSection1", isAdminAuthenticated, getSection1);
router.delete("/deleteSection1/:id", isAdminAuthenticated, deleteSection1);

export default router;
