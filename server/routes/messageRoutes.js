import express from "express";
import { messageSent, getMessage } from "../controllers/messController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, messageSent);

export default router;
