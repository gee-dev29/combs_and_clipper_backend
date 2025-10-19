import { Entity, ManyToOne } from 'typeorm';
import { Shop } from '../../Shop/entity/shop.entity';
import { Stylist } from '../../Stylist/entity/stylist.entity';

@Entity('staff')
export class Staff extends Stylist {
  @ManyToOne(() => Shop, (shop) => shop.staff)
  shop: Shop;
}
