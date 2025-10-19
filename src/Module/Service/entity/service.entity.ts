import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { ServiceEnums } from '../enums/ServiceEnums';
import { IsNumber, IsOptional } from 'class-validator';
import { Promo } from '../../Promo/entity/promo.entity';
import { Stylist } from '../../Stylist/entity/stylist.entity';
import { Notification } from '../../Notification/entity/notification.entity';

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

  @OneToMany(() => Promo, (promo) => promo.service)
  promo: Promo[];

  @OneToMany(() => Notification, (notification) => notification.service)
  @IsOptional()
  notification?: Notification[];

  @ManyToOne(() => Stylist, (stylist) => stylist.service)
  stylist: Stylist;
}
