import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  id: string;
  admin: boolean;
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }
}

export { User };
