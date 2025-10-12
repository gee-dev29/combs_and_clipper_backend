import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { IsDate, IsEnum, IsNumber } from 'class-validator';
import { PromoEnums } from '../enums/PromoEnums';
import { Service } from '../../Service/entity/service.entity';

@Entity('promo')
export class Promo extends BaseEntity {
  @Column()
  @IsNumber()
  amount: number;

  @Column()
  @IsDate()
  start_date: Date;

  @Column()
  @IsDate()
  end_date: Date;

  @Column()
  @IsEnum(PromoEnums)
  status: PromoEnums;

  @ManyToOne(() => Service, (service) => service.promo)
  service: Service;
}
