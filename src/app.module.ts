import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Module/User/users.module';
import { AuthModule } from './Module/Auth/auth.module';
import { User } from './Module/User/entity/user.entity';
import { Profile } from './Module/Profile/entity/profile.entity';
import { Wallet } from './Module/Wallet/wallet.entity';
import { Role } from './Module/Role/entity/role.entity';
import { Stylist } from './Module/Stylist/entity/stylist.entity';
import { Shop } from './Module/Shop/entity/shop.entity';
import { Reviews } from './Module/Reviews/entity/reviews.entity';
import { Interest } from './Module/Interest/entity/interest.entity';
import { Staff } from './Module/Staff/entity/staff.entity';
import { Service } from './Module/Service/entity/service.entity';
import { Notification } from './Module/Notification/entity/notification.entity';
import { Promo } from './Module/Promo/entity/promo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'config.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST', 'localhost'),
        port: configService.get('DATABASE_PORT', 5432),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [User, Profile, Wallet, Role, Stylist, Shop, Reviews, Interest, Staff, Service, Notification, Promo],
        synchronize: configService.get('NODE_ENV') !== 'production',
        logging: configService.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
