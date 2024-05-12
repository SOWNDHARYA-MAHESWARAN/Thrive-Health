import express from "express";
import {
  getSection2B,
  postSection2B,
  deleteSection2B,
} from "../controller/section2BController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/postSection2B", isPatientAuthenticated, postSection2B);
router.get("/getSection2B", isAdminAuthenticated, getSection2B);
router.delete("/deleteSection2B/:id", isAdminAuthenticated, deleteSection2B);

export default router;
