import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty({
    message: 'name Khong duoc de trong',
  })
  name: string;

  @IsNotEmpty({
    message: 'apiPath Khong duoc de trong',
  })
  apiPath: string;

  @IsNotEmpty({
    message: 'method Khong duoc de trong',
  })
  method: string;

  @IsNotEmpty({
    message: 'module Khong duoc de trong',
  })
  module: string;
}
