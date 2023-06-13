import express, { Router } from "express";
import { get, getAll, remove, signin, signup, update } from "../controllers/auth";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user",getAll);
router.get("/user/:id",get);
router.delete("/user/:id",remove);
export default router;
