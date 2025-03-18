import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/prisma";

const JWT_SECRET = "superman";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { id: number };

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      return res.status(401).send("User not found");
    }
    req.user = { id: String(user.id), name: user.name, email: user.email };
    next();
  } catch (err) {
    return res.status(400).send("Invalid token");
  }
};
