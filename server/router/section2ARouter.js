import express from "express";
import {
  getSection2A,
  postSection2A,
  deleteSection2A,
} from "../controller/section2AController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/postSection2A", isPatientAuthenticated, postSection2A);
router.get("/getSection2A", isAdminAuthenticated, getSection2A);
router.delete("/deleteSection2A/:id", isAdminAuthenticated, deleteSection2A);

export default router;
