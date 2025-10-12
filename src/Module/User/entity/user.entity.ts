import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { UserStatus } from '../enums/UserStatus';
import { Role } from '../../Role/entity/role.entity';
import { Wallet } from '../../Wallet/wallet.entity';
import { Profile } from '../../Profile/entity/profile.entity';
import { BaseEntity } from '../../Base/base.entity';
import { Service } from '../../Service/entity/service.entity';
import { IsEnum } from 'class-validator';
import { Shop } from '../../Shop/entity/shop.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

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
  profile: Profile;

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallet: Wallet;

  @OneToOne(() => Role, (role) => role.user)
  role: Role;

  @OneToMany(() => Service, (service) => service.user)
  service: Service[];

  @OneToMany(() => Shop, (store) => store.user)
  shop: Shop;
}
