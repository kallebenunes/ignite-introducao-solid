import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      const createdUser = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json({ error: 400 });
    }
  }
}

export { CreateUserController };
