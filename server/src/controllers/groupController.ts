import { Request, Response } from "express";
import { prisma } from "../../db/prisma";

// Create new group
export const createGroup = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    // @ts-ignore
    const user = req.user;

    const newGroup = await prisma.group.create({
      data: {
        name,
        members: {
          create: {
            userId: user.id,
          },
        },
      },
    });

    return res.status(201).json(newGroup);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get all groups
export const getAllGroups = async (_req: Request, res: Response) => {
  try {
    const groups = await prisma.group.findMany();

    return res.status(200).json(groups);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get group by id
export const getGroupById = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);

    const group = await prisma.group.findUnique({
      where: {
        id: groupId,
      },
      include: {
        members: true,
      },
    });

    if (!group) {
      return res.status(404).send("Group not found");
    }

    return res.status(200).json(group);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Update group name
export const updateGroup = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const { name } = req.body;

    const updatedGroup = await prisma.group.update({
      where: { id: groupId },
      data: { name },
    });

    return res.status(200).json(updatedGroup);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Delete group by id
export const deleteGroup = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    await prisma.group.delete({
      where: { id: groupId },
    });

    return res.status(200).send("Group deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Add member to group
export const addMemberToGroup = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const { userId } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const existingMember = await prisma.groupMember.findUnique({
      where: {
        groupId_userId: {
          groupId,
          userId: parseInt(userId),
        },
      },
    });

    if (existingMember) {
      return res.status(400).send("User is already a member of the group");
    }

    const groupMember = await prisma.groupMember.create({
      data: {
        groupId,
        userId: parseInt(userId),
      },
    });

    return res.status(201).json(groupMember);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Remove member from group
export const removeMemberFromGroup = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const { userId } = req.body;

    await prisma.groupMember.delete({
      where: {
        groupId_userId: {
          groupId: groupId,
          userId: parseInt(userId),
        },
      },
    });

    return res.status(200).send("Member removed successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Get group balances for all expenses
export const getGroupBalances = async (req: Request, res: Response) => {
  try {
    const groupId = parseInt(req.params.groupId);
    // @ts-ignore
    const userId = req.user.id;

    const expenses = await prisma.expense.findMany({
      where: { groupId },
      include: { splits: true, user: true },
    });

    const balances: { [userId: number]: number } = {};

    expenses.forEach((expense) => {
      const payerId = expense.userId;
      const totalAmount = expense.amount;

      if (!balances[payerId]) balances[payerId] = 0;
      balances[payerId] += totalAmount;

      expense.splits.forEach((split) => {
        const splitUserId = split.userId;
        const splitAmount = split.amount;

        if (!balances[splitUserId]) balances[splitUserId] = 0;
        balances[splitUserId] -= splitAmount;
      });
    });

    const userBalances: {
      owes: { userId: number; name: string; amount: number }[];
      owed: { userId: number; name: string; amount: number }[];
    } = {
      owes: [],
      owed: [],
    };
    for (const id in balances) {
      const balance = balances[id];
      if (parseInt(id) === userId) continue;

      const user = expenses.find((exp) => exp.userId === parseInt(id))?.user;

      if (balance > 0) {
        userBalances.owes.push({
          userId: parseInt(id),
          name: user?.name || "Unknown",
          amount: balance,
        });
      } else if (balance < 0) {
        userBalances.owed.push({
          userId: parseInt(id),
          name: user?.name || "Unknown",
          amount: -balance,
        });
      }
    }

    return res.status(200).json(userBalances);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
