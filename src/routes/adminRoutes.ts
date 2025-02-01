// ./src/routes/userRoutes.js

import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  restoreUser,
} from "../controllers/adminController.js";

// Middlewares
import { authenticateToken } from "../middleware/authTokenMiddleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { checkUserActiveMiddleware } from "../middleware/checkUserActiveMiddleware.js";

import { validateUpdateUser } from "../validation/userValidate.js";
import { handleValidationErrors } from "../middleware/errorHandler.js";

const router = express.Router();

/**
 * Rutas de usuarios
 */
router.get(
  "/allusers",
  authenticateToken,
  checkUserActiveMiddleware,
  verifyAdmin,
  getAllUsers
);
router.get("/users/:id", authenticateToken, checkUserActiveMiddleware,verifyAdmin, getUserById);
router.put(
  "/users/update/:id",
  authenticateToken,
  checkUserActiveMiddleware,
  validateUpdateUser,
  handleValidationErrors,verifyAdmin,
  updateUser
);
router.delete(
  "/users/delete/:id",
  authenticateToken,
  checkUserActiveMiddleware,verifyAdmin,
  deleteUser
);
router.put(
  "/users/restore/:id",
  authenticateToken,
  checkUserActiveMiddleware,
  verifyAdmin,
  restoreUser
);

export default router;
