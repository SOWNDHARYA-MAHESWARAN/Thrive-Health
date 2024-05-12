import express from "express";
import {
  deleteEnrollments,
  getAllEnrolledPatients,
  postEnrollment,
} from "../controller/enrollmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/post", isPatientAuthenticated, postEnrollment);
router.get("/getall", isAdminAuthenticated, getAllEnrolledPatients);
router.delete("/delete/:id", isAdminAuthenticated, deleteEnrollments);

export default router;
