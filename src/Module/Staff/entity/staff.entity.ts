import { Entity, ManyToOne } from 'typeorm';
import { User } from '../../User/entity/user.entity';
import { Shop } from '../../Shop/entity/shop.entity';

@Entity('staff')
export class Staff extends User {
  @ManyToOne(() => Shop, (shop) => shop.staff)
  shop: Shop;
}
