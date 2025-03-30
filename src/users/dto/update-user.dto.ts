import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  _id: string;
  @IsEmail(
    {},
    {
      message: 'Email Khong Dung Dinh Dang',
    },
  )
  @IsNotEmpty({
    message: 'Email Khong duoc de trong',
  })
  email: string;

  @IsString()
  name: string;

  @IsString()
  address: string;
}
