import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { IsNumber } from 'class-validator';
import { User } from '../../User/entity/user.entity';
import { Staff } from '../../Staff/entity/staff.entity';

@Entity('shop')
export class Shop extends BaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  @IsNumber()
  postal_code: number;

  @ManyToOne(() => User, (user) => user.shop)
  user: User;

  @OneToMany(() => Staff, (staff) => staff.shop)
  staff: Staff;
}
