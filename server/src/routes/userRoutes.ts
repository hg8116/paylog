import { Router } from "express";
import {
  getGroupsForUser,
  getMyProfile,
  //getUser,
  getUsers,
  //updateMyProfile,
  updateUserName,
  updateUserPassword,
} from "../controllers/userController";
import validate from "../middleware/validate";
import {
  updateUserNameSchema,
  updateUserPasswordSchema,
} from "../schemas/userSchemas";
import { authenticate } from "../middleware/authenticate";
import { getExpensesForUser } from "../controllers/expenseController";

const router = Router();

router.get("/", getUsers);
//router.get("/:id", getUser);
router.put(
  "/me/name",
  authenticate,
  validate(updateUserNameSchema),
  updateUserName,
);
router.put(
  "/me/password",
  authenticate,
  validate(updateUserPasswordSchema),
  updateUserPassword,
);
router.get("/:id/groups", authenticate, getGroupsForUser);
router.get("/:userId/expenses", authenticate, getExpensesForUser);
router.get("/me", authenticate, getMyProfile)
// router.put("/me", authenticate, updateMyProfile)

export default router;
