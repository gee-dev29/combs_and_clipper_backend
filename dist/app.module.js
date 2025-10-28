"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./Module/User/users.module");
const auth_module_1 = require("./Module/Auth/auth.module");
const user_entity_1 = require("./Module/User/entity/user.entity");
const profile_entity_1 = require("./Module/Profile/entity/profile.entity");
const wallet_entity_1 = require("./Module/Wallet/wallet.entity");
const role_entity_1 = require("./Module/Role/entity/role.entity");
const stylist_entity_1 = require("./Module/Stylist/entity/stylist.entity");
const shop_entity_1 = require("./Module/Shop/entity/shop.entity");
const reviews_entity_1 = require("./Module/Reviews/entity/reviews.entity");
const interest_entity_1 = require("./Module/Interest/entity/interest.entity");
const staff_entity_1 = require("./Module/Staff/entity/staff.entity");
const service_entity_1 = require("./Module/Service/entity/service.entity");
const notification_entity_1 = require("./Module/Notification/entity/notification.entity");
const promo_entity_1 = require("./Module/Promo/entity/promo.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: 'config.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST', 'localhost'),
                    port: configService.get('DATABASE_PORT', 5432),
                    username: configService.get('DATABASE_USERNAME'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [user_entity_1.User, profile_entity_1.Profile, wallet_entity_1.Wallet, role_entity_1.Role, stylist_entity_1.Stylist, shop_entity_1.Shop, reviews_entity_1.Reviews, interest_entity_1.Interest, staff_entity_1.Staff, service_entity_1.Service, notification_entity_1.Notification, promo_entity_1.Promo],
                    synchronize: configService.get('NODE_ENV') !== 'production',
                    logging: configService.get('NODE_ENV') === 'development',
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map