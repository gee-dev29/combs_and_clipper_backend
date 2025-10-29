import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {
  NoIdFoundException,
  UserNotFoundByIdException,
} from '../../Module/User/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../Module/User/entity/user.entity';
import { isUUID } from 'class-validator';

@Injectable()
export class CheckUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userIdString = req.params.userId || req.params.id || req.body.userId;

    if (!isUUID(userIdString)) {
      throw new NoIdFoundException();
    }
    const user = await this.repository.findOne({ 
      where: { id: userIdString },
      relations: ['profile', 'role', 'wallet'], 
    });

    if (!user) {
      throw new UserNotFoundByIdException(userIdString);
    }
    req.user = user;
    next();
  }
}
