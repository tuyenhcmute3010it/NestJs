import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeCvDto, CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('resumes')
@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  @ResponseMessage('Create a resume')
  create(@Body() createResumeDto: CreateResumeCvDto, @User() user: IUser) {
    return this.resumesService.create(createResumeDto, user);
  }
  @Post('by-user')
  @ResponseMessage('Get resumes by user')
  getResumesByUser(@User() user: IUser) {
    return this.resumesService.findByUsers(user);
  }

  @Get()
  @ResponseMessage('Fetch all resumes with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.resumesService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('status') status: string,
    @User()
    user: IUser,
  ) {
    return this.resumesService.update(id, status, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.resumesService.remove(id, user);
  }
}
