import { IsAlphanumeric, IsNumber, IsOptional } from 'class-validator';
import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { BaseEntity } from '../../Base/base.entity';
import { Interest } from '../../Interest/entity/interest.entity';

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

  @Column({ unique: true })
  @IsAlphanumeric()
  referral_code: number;

  @Column('bigint', { nullable: true })
  @IsOptional()
  merchant_code: number;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @OneToMany(() => Interest, (interest) => interest.profile)
  interest: Interest[];
}
