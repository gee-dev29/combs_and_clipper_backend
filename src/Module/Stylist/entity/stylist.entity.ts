import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { User } from '../../User/entity/user.entity';
import { Service } from '../../Service/entity/service.entity';
import { Reviews } from '../../Reviews/entity/reviews.entity';

@Entity('stylist')
export class Stylist extends BaseEntity {
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

  @Column()
  @IsOptional()
  cover_image: string;

  @OneToOne(() => User, (user) => user.stylist)
  user: User;

  @OneToMany(() => Service, (service) => service.stylist)
  service: Service;

  @OneToMany(() => Reviews, (review) => review.stylist)
  review: Reviews;
}
