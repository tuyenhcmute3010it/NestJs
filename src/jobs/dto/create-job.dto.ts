import { Type } from 'class-transformer';
import {
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
export class CreateJobDto {
  @IsNotEmpty({
    message: 'name Khong duoc de trong',
  })
  name: string;

  @IsNotEmpty({
    message: 'skills Khong duoc de trong',
  })
  skills: string[];

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @IsNotEmpty({
    message: 'location Khong duoc de trong',
  })
  location: string;

  @IsNotEmpty({
    message: 'salary Khong duoc de trong',
  })
  salary: number;

  @IsNotEmpty({
    message: 'quantity Khong duoc de trong',
  })
  quantity: number;

  @IsNotEmpty({
    message: 'level Khong duoc de trong',
  })
  level: string;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  description: string;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  startDate: Date;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  endDate: Date;

  @IsNotEmpty({
    message: 'isActive Khong duoc de trong',
  })
  isActive: boolean;
}
