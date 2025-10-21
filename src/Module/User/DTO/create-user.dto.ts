import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  MinLength,
} from 'class-validator';
import { BaseDto } from '../../Base/base.dto';
import { Type } from 'class-transformer';
import { UserStatus } from '../enums/UserStatus';

export class tokenObject {
  jwt: string;
  exp: Date;
}

export class CreateUserDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  phone: string;

  @IsEnum(UserStatus)
  status: UserStatus;

  @IsObject()
  @Type(() => tokenObject)
  token: object;
}
