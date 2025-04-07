import { PartialType } from '@nestjs/swagger';
import { CreateResumeDto } from './create-resume.dto';
import { IsArray, IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';

class UpdateBy {
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
class History {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  updatedAt: Date;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => UpdateBy)
  updatedBy: UpdateBy;
}

export class UpdateResumeDto extends PartialType(CreateResumeDto) {
  @IsNotEmpty({ message: 'history khong duoc de trong' })
  @IsArray({
    message: 'history co dinh dang la Array',
  })
  @ValidateNested()
  @Type(() => History)
  history: History[];
}
