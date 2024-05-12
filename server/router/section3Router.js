import express from "express";
import {
  getSection3,
  postSection3,
  deleteSection3,
} from "../controller/section3Controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/postSection3", isPatientAuthenticated, postSection3);
router.get("/getSection3", isAdminAuthenticated, getSection3);
router.delete("/deleteSection3/:id", isAdminAuthenticated, deleteSection3);

export default router;
