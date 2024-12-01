import { Router } from "express";
import {
  addMemberToGroup,
  createGroup,
  deleteGroup,
  getAllGroups,
  getGroupBalances,
  getGroupById,
  removeMemberFromGroup,
  updateGroup,
} from "../controllers/groupController";
import { authenticate } from "../middleware/authenticate";
import { getExpensesForGroup } from "../controllers/expenseController";

const router = Router();

router.post("/", authenticate, createGroup);
router.get("/", getAllGroups);
router.get("/:groupId", getGroupById);
router.patch("/:groupId", authenticate, updateGroup);
router.delete("/:groupId", authenticate, deleteGroup);
router.post("/:groupId/members", authenticate, addMemberToGroup);
router.delete("/:groupId/members", authenticate, removeMemberFromGroup);
router.get("/:groupId/expenses", authenticate, getExpensesForGroup);
router.get("/:groupId/balances", getGroupBalances);

export default router;
