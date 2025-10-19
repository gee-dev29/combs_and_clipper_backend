import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { UserStatus } from '../enums/UserStatus';
import { Role } from '../../Role/entity/role.entity';
import { Wallet } from '../../Wallet/wallet.entity';
import { Profile } from '../../Profile/entity/profile.entity';
import { BaseEntity } from '../../Base/base.entity';
import { IsEnum } from 'class-validator';
import { Shop } from '../../Shop/entity/shop.entity';
import { Stylist } from '../../Stylist/entity/stylist.entity';
import { Reviews } from '../../Reviews/entity/reviews.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  phone: string;

  @Column('jsonb')
  token: object;

  @Column()
  @IsEnum(UserStatus)
  status: UserStatus;

  @Column()
  phone_verified: boolean;

  @Column()
  email_verified: boolean;

  @Column()
  sms_otp: boolean;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  @JoinColumn()
  wallet: Wallet;

  @OneToOne(() => Role, (role) => role.user)
  @JoinColumn()
  role: Role;

  @OneToOne(() => Stylist, (stylist) => stylist.user)
  stylist: Stylist;

  @OneToMany(() => Shop, (store) => store.user)
  shop: Shop;

  @ManyToMany(() => Reviews, (review) => review.user)
  review: Reviews;
}
