import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {
  NoIdFoundException,
  UserNotFoundByIdException,
} from '../../Module/User/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../Module/User/entity/user.entity';

@Injectable()
export class CheckUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.id || req.body.userId;

    if (!userId) {
      throw new NoIdFoundException();
    }

    // Check if user exists
    const user = await this.repository.findOne({ where: { id: userId } });

    if (!user) {
      throw new UserNotFoundByIdException(userId);
    }
    req.user = user;
    next();
  }
}
