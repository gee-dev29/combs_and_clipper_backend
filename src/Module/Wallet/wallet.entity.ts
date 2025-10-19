import { Entity, Column, OneToOne } from 'typeorm';
import { User } from '../User/entity/user.entity';
import { BaseEntity } from '../Base/base.entity';

@Entity('wallet')
export class Wallet extends BaseEntity {
  @Column('bigint', { default: 0 })
  balance: number;

  @Column('bigint', { default: 0 })
  unclaimed_balance: number;

  @Column('uuid')
  user_id: string;

  @OneToOne(() => User, (user) => user.wallet)
  user: User;

  @Column('bigint')
  account_number: number;
}
