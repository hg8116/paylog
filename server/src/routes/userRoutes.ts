import { Router } from "express";
import {
  getGroupsForUser,
  getUser,
  getUsers,
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
router.get("/:id", getUser);
router.put(
  "/:id/name",
  authenticate,
  validate(updateUserNameSchema),
  updateUserName,
);
router.put(
  "/:id/password",
  authenticate,
  validate(updateUserPasswordSchema),
  updateUserPassword,
);
router.get("/:id/groups", authenticate, getGroupsForUser);
router.get("/:userId/expenses", authenticate, getExpensesForUser);

export default router;
