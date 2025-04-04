import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { OmitType } from '@nestjs/mapped-types';
export class ShowUserDto extends OmitType(CreateUserDto, [
  'password',
] as const) {}
