import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserStatus } from '../../Enum/UserStatus';
import { Role } from '../Role/role.entity';
import { Wallet } from '../Wallet/wallet.entity';
import { Profile } from '../Profile/profile.entity';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
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

  @Column('uuid')
  wallet_id: string;

  @Column('uuid')
  profile_id: string;

  @Column('uuid')
  role_id: string;

  @Column('int')
  referral_code: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallet: Wallet;

  @OneToOne(() => Role, (role) => role.user)
  role: Role;
}
