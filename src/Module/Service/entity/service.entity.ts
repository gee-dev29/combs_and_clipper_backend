import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { ServiceEnums } from '../enums/ServiceEnums';
import { IsArray, IsBoolean, IsNumber } from 'class-validator';
import { User } from '../../User/entity/user.entity';
import { Promo } from '../../Promo/entity/promo.entity';

@Entity('service')
export class Service extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ServiceEnums })
  status: ServiceEnums.ACTIVE;

  @Column()
  @IsNumber()
  amount: number;

  @Column({ unique: true })
  slog: string;

  @Column()
  duration: string;

  @Column()
  location: string;

  @Column()
  @IsBoolean()
  allow_cancelation: boolean;

  @Column()
  @IsBoolean()
  allow_reschedule: boolean;

  @Column()
  @IsBoolean()
  limit_early_booking: boolean;

  @Column()
  @IsBoolean()
  limit_late_booking: boolean;

  @Column()
  @IsArray()
  available_hours: [];

  @Column()
  @IsArray()
  images: [];

  @ManyToOne(() => User, (user) => user.service)
  user: User;

  @OneToMany(() => Promo, (promo) => promo.service)
  promo: Promo;
}
