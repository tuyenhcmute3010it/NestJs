import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
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

  @IsNotEmpty({
    message: 'Password Khong duoc de trong',
  })
  password: string;

  @IsString()
  name: string;
  @IsString()
  address: string;
}
