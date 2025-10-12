import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { UserType } from '../enums/UserType';
import { BaseEntity } from '../../Base/base.entity';

@Entity('role')
export class Role extends BaseEntity {
  @Column({ type: 'enum', enum: UserType, default: UserType.CLIENT })
  userType: UserType;

  @OneToOne(() => User, (user) => user.role)
  user: User;
}
