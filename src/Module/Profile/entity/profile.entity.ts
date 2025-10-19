import { IsAlphanumeric, IsOptional } from 'class-validator';
import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { BaseEntity } from '../../Base/base.entity';
import { Interest } from '../../Interest/entity/interest.entity';

@Entity('profile')
export class Profile extends BaseEntity {
  @Column()
  @IsOptional()
  info: string;

  @Column()
  @IsOptional()
  profile_image: string;

  @Column()
  address: string;

  @Column({ unique: true })
  @IsAlphanumeric()
  referral_code: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @OneToMany(() => Interest, (interest) => interest.profile)
  interest: Interest[];
}
