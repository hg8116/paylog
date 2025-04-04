import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        next();
      } catch (err: any) {
        if (err.errors) {
          return res.status(400).json({ errors: err.errors });
        }
        return res.status(400).json({ message: "Invalid request" });
      }
    };

export default validate;
