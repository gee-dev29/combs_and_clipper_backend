import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { User } from '../../User/entity/user.entity';
import { IsNumber } from 'class-validator';
import { Stylist } from '../../Stylist/entity/stylist.entity';

@Entity('reviews')
export class Reviews extends BaseEntity {
  @Column()
  @IsNumber()
  rating: number;

  @Column()
  comments: string;

  @ManyToMany(() => User, (user) => user.review)
  user: User;

  @ManyToOne(() => Stylist, (stylist) => stylist.review)
  stylist: Stylist;
}
