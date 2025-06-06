import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { OmitType } from '@nestjs/mapped-types';
export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password',
] as const) {
  @IsString()
  _id: string;
}
