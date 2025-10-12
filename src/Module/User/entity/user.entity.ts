import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { UserStatus } from '../enums/UserStatus';
import { Role } from '../../Role/entity/role.entity';
import { Wallet } from '../../Wallet/wallet.entity';
import { Profile } from '../../Profile/entity/profile.entity';
import { BaseEntity } from '../../Base/base.entity';

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

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.PENDING,
  })
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

  // @OneToMany(()=> Store, (store)=> store.user)
  // store: Store
}
