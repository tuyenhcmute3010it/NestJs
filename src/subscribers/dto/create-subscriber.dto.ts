import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateSubscriberDto {
  @IsNotEmpty({
    message: 'name Khong duoc de trong',
  })
  name: string;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  @IsEmail({ message: 'Email khong duoc de trong' })
  email: string;

  @IsNotEmpty({
    message: 'skills Khong duoc de trong',
  })
  @IsArray({
    message: 'skills phai la dinh dang array',
  })
  skills: string[];
}
