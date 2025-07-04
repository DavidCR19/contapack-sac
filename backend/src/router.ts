import { Router } from "express";
import { body } from "express-validator";
import { createAccount, getUser, login } from "./handlers";
import { authenticate } from "./middleware/auth";
import { handleInputErrors } from "./middleware/validation";

const router = Router();

// Auth
router.post(
  "/auth/register",
  // body("name").notEmpty().withMessage("El nombre no puede estar vacio"),
  // body("email").isEmail().withMessage("El email no valido"),
  // body("password")
  //   .isLength({ min: 8 })
  //   .withMessage("El password debe tener minimo 8 caracteres"),
  // handleInputErrors,
  createAccount
);

router.post(
  "/auth/login",
  // body("email").isEmail().withMessage("El email no valido"),
  // body("password").notEmpty().withMessage("El password es obligatorio"),
  // handleInputErrors,
  login
);

router.get("/user", authenticate, getUser);
// router.patch(
//   "/user",
//   body("handle").notEmpty().withMessage("El handle no puede estar vacio"),
//   handleInputErrors,
//   authenticate,
//   updateProfile
// );

export default router;
