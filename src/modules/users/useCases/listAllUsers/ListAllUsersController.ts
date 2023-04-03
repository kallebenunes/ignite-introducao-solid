import { Request, Response } from "express";
import { stringify } from "uuid";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const usersList = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      });

      return response.status(200).json(usersList);
    } catch (error) {
      return response.status(400).json({ error: 400 });
    }
  }
}

export { ListAllUsersController };
