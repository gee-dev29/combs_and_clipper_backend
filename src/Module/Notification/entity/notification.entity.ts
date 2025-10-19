import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { Service } from '../../Service/entity/service.entity';
import { IsOptional } from 'class-validator';

@Entity('notification')
export class Notification extends BaseEntity {
  @Column()
  title: string;

  @Column()
  message: string;

  @ManyToOne(() => Service, (service) => service.notification)
  @IsOptional()
  service?: Service;
}
