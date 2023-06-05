import express from "express";
import { create, getAll, get, update, remove } from "../controllers/product";
const router = express.Router();

router.get("/product", getAll)
router.get("/product/:id", get)
router.post("/product", create)
router.put("/product/:id", update)
router.delete("/product/:id", remove)

export default router;