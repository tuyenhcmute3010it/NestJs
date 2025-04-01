import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { OmitType } from '@nestjs/mapped-types';
export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password',
] as const) {
  @IsString()
  _id: string;
}
// export class UpdateUserDto {
//   @IsString()
//   _id: string;
//   @IsEmail(
//     {},
//     {
//       message: 'Email Khong Dung Dinh Dang',
//     },
//   )
//   @IsNotEmpty({
//     message: 'Email Khong duoc de trong',
//   })
//   email: string;

//   @IsString()
//   name: string;

//   @IsString()
//   address: string;
// }
