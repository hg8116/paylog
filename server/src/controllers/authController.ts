import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "superman";

// Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("You must provide a name, an email and a password");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).send("Email already in use");
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (newUser) {
      let token = jwt.sign({ id: newUser.id }, JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("jwt", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

      return res.status(201).send(newUser);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (err) {
    console.log(err);
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email or password is missing");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(403).send("Invalid login credentials");
    }

    const validPass = await bcrypt.compare(password, user?.password || "");
    if (validPass) {
      let token = jwt.sign({ id: user?.id }, JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("jwt", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

      return res.status(201).send(user);
    } else {
      return res.status(401).send("Invalid login credentials");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error")
  }
};

// Logout user
export const logout = async (_req: Request, res: Response) => {
  res.cookie("jwt", "", { maxAge: 0, httpOnly: true });
  return res.status(200).send("Successfully logged out");
};
