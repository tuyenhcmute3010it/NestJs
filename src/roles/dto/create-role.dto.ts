import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({
    message: 'name Khong duoc de trong',
  })
  name: string;

  @IsNotEmpty({
    message: 'description Khong duoc de trong',
  })
  description: string;

  @IsNotEmpty({
    message: 'isActive Khong duoc de trong',
  })
  @IsBoolean({
    message: 'isActive must have value Boolean',
  })
  isActive: boolean;

  @IsNotEmpty({
    message: 'permissions Khong duoc de trong',
  })
  @IsMongoId({
    each: true,
    message: 'each permission is mongo object id',
  })
  @IsArray({
    message: 'permission type must is array ',
  })
  permissions: mongoose.Schema.Types.ObjectId[];
}
