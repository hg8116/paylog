import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import bcrypt from "bcryptjs";

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({});
    return res.send(users);
  } catch (err) {
    console.log(err);
  }
};

// // Get specific user using id
// export const getUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).send("ID missing");
//     }

//     const user = await prisma.user.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//     });

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     //console.log(user);
//     return res.status(200).send(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server error");
//   }
// };

// Get specific user using email
export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    const user = await prisma.user.findUnique({
      where: { email: String(email) },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Update user name using id
export const updateUserName = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).send("Unauthorized")
    }
    const { name } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// Update user password using id
export const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).send("Unauthorized")
    }
    const { oldPassword, newPassword } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const validPass = await bcrypt.compare(oldPassword, user.password);
    if (!validPass) {
      return res.status(400).send("Enter the correct old password");
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 12);

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        password: hashedPassword,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

// TODO:Delete user using id

// Get all groups user is present in
export const getGroupsForUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userGroups = await prisma.group.findMany({
      where: {
        members: {
          some: { userId: parseInt(id) },
        },
      },
      include: {
        members: true,
      },
    });

    return res.status(200).json(userGroups);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};


// Get current user's profile
export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).send("Unauthorized")
    }
//    console.log(req.user)
//    console.log("USER ID", userId)
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    if (!user) {
      return res.status(404).send("User not found")
    }

    return res.status(200).json(user)
  }
  catch (err) {
    console.log(err)
    return res.status(500).send("Server error")
  }
}

// // Update current user's profile
// export const updateMyProfile = async (req: Request, res: Response) => {
//   try {
//     const userId = req.user?.id
//     const { name } = req.body

//     if (!userId) {
//       return res.status(401).send("Unauthorized")
//     }

//     const updatedUser = await prisma.user.update({
//       where: { id: parseInt(userId) },
//       data: { name }
//     })
//     return res.status(200).json(updatedUser)

//   }
//   catch (err) {
//     console.log(err)
//     return res.status(500).send("Server error")
//   }
// }

