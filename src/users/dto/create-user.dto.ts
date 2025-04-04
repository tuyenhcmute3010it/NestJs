import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name Khong duoc de trong' })
  name: string;

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

  @IsNotEmpty({
    message: 'Age Khong duoc de trong',
  })
  age: number;

  @IsNotEmpty({
    message: 'Gender Khong duoc de trong',
  })
  gender: number;

  @IsNotEmpty({
    message: 'Address Khong duoc de trong',
  })
  address: number;
}
export class RegisterUserDto {
  @IsNotEmpty({ message: 'Name Khong duoc de trong' })
  name: string;

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

  @IsNotEmpty({
    message: 'Age Khong duoc de trong',
  })
  age: number;

  @IsNotEmpty({
    message: 'Gender Khong duoc de trong',
  })
  gender: string;

  @IsNotEmpty({
    message: 'Address Khong duoc de trong',
  })
  address: string;

  @IsNotEmpty({
    message: 'role Khong duoc de trong',
  })
  role: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
