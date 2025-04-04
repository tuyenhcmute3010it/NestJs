import { PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';
import { OmitType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
