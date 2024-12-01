import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import {
  createExpense,
  deleteExpense,
  deleteExpenseSplit,
  getExpenseById,
  getExpenseSplits,
  splitExpense,
  updateExpense,
  updateExpenseSplit,
} from "../controllers/expenseController";

const router = Router();

router.post("/", authenticate, createExpense);
router.get("/:expenseId", authenticate, getExpenseById);
router.put("/:expenseId", authenticate, updateExpense);
router.delete("/:expenseId", authenticate, deleteExpense);

router.post("/split", authenticate, splitExpense);
router.get("/:expenseId/splits", authenticate, getExpenseSplits);
router.put("/split/:expenseSplitId", authenticate, updateExpenseSplit);
router.delete("/split/:expenseSplitId", authenticate, deleteExpenseSplit);

export default router;
