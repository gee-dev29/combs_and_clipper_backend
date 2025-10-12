import { IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { BaseEntity } from '../../Base/base.entity';

@Entity('profile')
export class Profile extends BaseEntity {
  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  profile_image: string;

  @Column({ nullable: true })
  cover_image: string;

  @Column({ nullable: true })
  specialization: string;

  @Column('bigint')
  referral_code: number;

  @Column('bigint', { nullable: true })
  @IsOptional()
  merchant_code: number;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
