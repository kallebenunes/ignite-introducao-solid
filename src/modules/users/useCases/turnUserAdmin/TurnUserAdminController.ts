import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const receivedUSer = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(receivedUSer);
    } catch {
      return response.status(404).json({ error: 404 });
    }
  }
}

export { TurnUserAdminController };
