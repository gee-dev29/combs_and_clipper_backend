import { User } from '../../Module/User/entity/user.entity';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

