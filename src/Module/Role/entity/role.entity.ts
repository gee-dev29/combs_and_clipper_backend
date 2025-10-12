import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { UserType } from '../enums/UserType';
import { BaseEntity } from '../../Base/base.entity';
import { IsEnum } from 'class-validator';

@Entity('role')
export class Role extends BaseEntity {
  @Column()
  @IsEnum(UserType)
  userType: UserType;

  @OneToOne(() => User, (user) => user.role)
  user: User;
}
