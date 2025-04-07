import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateResumeDto {
  @IsNotEmpty({
    message: 'email Khong duoc de trong',
  })
  email: string;

  @IsNotEmpty({
    message: 'userId Khong duoc de trong',
  })
  userId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'url Khong duoc de trong',
  })
  url: string;

  @IsNotEmpty({
    message: 'status Khong duoc de trong',
  })
  status: string;

  @IsNotEmpty({
    message: 'companyId Khong duoc de trong',
  })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'jobId Khong duoc de trong',
  })
  jobId: mongoose.Schema.Types.ObjectId;
}
export class CreateResumeCvDto {
  @IsNotEmpty({
    message: 'url Khong duoc de trong',
  })
  url: string;

  @IsNotEmpty({
    message: 'companyId Khong duoc de trong',
  })
  @IsMongoId({
    message: 'companyId is a mongo id',
  })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'jobId Khong duoc de trong',
  })
  @IsMongoId({
    message: 'jobId is a mongo id',
  })
  jobId: mongoose.Schema.Types.ObjectId;
}
