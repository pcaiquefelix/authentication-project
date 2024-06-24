import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

class GetUserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);

        const users = await repository.find();

        return res.json(users);
    }
}

export default new GetUserController();