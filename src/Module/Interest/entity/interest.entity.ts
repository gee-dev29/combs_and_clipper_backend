import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../Base/base.entity';
import { Profile } from '../../Profile/entity/profile.entity';

@Entity('interest')
export class Interest extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Profile, (profile) => profile.interest)
  profile: Profile;
}
