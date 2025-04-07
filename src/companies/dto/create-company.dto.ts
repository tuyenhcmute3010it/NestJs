import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({
    message: 'name Khong duoc de trong',
  })
  name: string;

  @IsNotEmpty({
    message: 'address Khong duoc de trong',
  })
  address: string;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  description: string;

  @IsNotEmpty({
    message: 'logo Khong duoc de trong',
  })
  logo: string;
}
