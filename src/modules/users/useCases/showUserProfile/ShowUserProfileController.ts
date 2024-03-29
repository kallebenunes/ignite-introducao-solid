import { json, Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const searchedUser = this.showUserProfileUseCase.execute({ user_id });

      return searchedUser
        ? response.status(201).json(searchedUser)
        : response.status(404).json({ error: 404 });
    } catch (error) {
      return response.status(404).json({ error: 404 });
    }
  }
}

export { ShowUserProfileController };
