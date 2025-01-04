import { Request, Response } from "express";
import { prisma } from "../../db/prisma";

// Create new expense
export const createExpense = async (req: Request, res: Response) => {
  try {
    const { amount, groupId, splits } = req.body;
    // @ts-ignore
    const user = req.user;
    const userId = user.id;
    //console.log(userId);
    const newExpense = await prisma.expense.create({
      data: {
        amount: parseFloat(amount),
        groupId: parseInt(groupId),
        userId: parseInt(userId),
        splits: {
          create: splits.map((split: any) => ({
            userId: parseInt(split.userId),
            amount: parseFloat(split.amount),
          })),
        },
      },
    });

    return res.status(201).json(newExpense);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get expenses for group
export const getExpensesForGroup = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const expenses = await prisma.expense.findMany({
      where: {
        groupId: groupId,
      },
      include: {
        splits: true,
      },
    });
    return res.status(200).json(expenses);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get expenses for user
export const getExpensesForUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const createdExpenses = await prisma.expense.findMany({
      where: {
        userId: userId,
      },
      include: {
        splits: true,
      },
    });

    const splitExpenses = await prisma.expense.findMany({
      where: {
        splits: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        splits: true,
      },
    });

    const expenses = [...createdExpenses, ...splitExpenses].filter(
      (expense, index, self) =>
        index === self.findIndex((e) => e.id === expense.id),
    );

    return res.status(200).json(expenses);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get expense by Id
export const getExpenseById = async (req: Request, res: Response) => {
  try {
    const expenseId = parseInt(req.params.expenseId);

    const expense = await prisma.expense.findUnique({
      where: {
        id: expenseId,
      },
      include: {
        splits: true,
      },
    });

    if (!expense) {
      return res.status(404).send("Expense not found");
    }

    return res.status(200).json(expense);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Update expense
export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expenseId = parseInt(req.params.expenseId);
    const { amount } = req.body;

    const updatedExpense = await prisma.expense.update({
      where: { id: expenseId },
      data: { amount },
    });

    return res.status(200).json(updatedExpense);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Delete expense
export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const expenseId = parseInt(req.params.expenseId);

    await prisma.expenseSplit.deleteMany({
      where: { expenseId: expenseId },
    });

    await prisma.expense.delete({
      where: { id: expenseId },
    });

    return res.status(200).send("Expense deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Split expense
export const splitExpense = async (req: Request, res: Response) => {
  try {
    const { expenseId, splits } = req.body;

    const newSplits = await prisma.expenseSplit.createMany({
      data: splits.map((split: any) => ({
        expenseId: parseInt(expenseId),
        userId: parseInt(split.userId),
        amount: parseFloat(split.amount),
      })),
    });

    return res.status(201).json(newSplits);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get expense split
export const getExpenseSplits = async (req: Request, res: Response) => {
  try {
    const expenseId = parseInt(req.params.expenseId);

    const splits = await prisma.expenseSplit.findMany({
      where: {
        expenseId: expenseId,
      },
    });
    return res.status(200).json(splits);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Update expense split
export const updateExpenseSplit = async (req: Request, res: Response) => {
  try {
    const expenseSplitId = parseInt(req.params.expenseSplitId);
    const { amount } = req.body;

    const updatedSplit = await prisma.expenseSplit.update({
      where: { id: expenseSplitId },
      data: { amount },
    });

    return res.status(200).json(updatedSplit);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Delete expense split
export const deleteExpenseSplit = async (req: Request, res: Response) => {
  try {
    const expenseSplitId = parseInt(req.params.expenseSplitId);

    await prisma.expenseSplit.delete({
      where: { id: expenseSplitId },
    });

    return res.status(200).send("Expense split deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
