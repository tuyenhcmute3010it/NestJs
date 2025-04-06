import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TestGuard } from './test.guard';
import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from './users.interface';
import { ShowUserDto } from './dto/show-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // -> /users/
  @ResponseMessage('Create a user')
  create(
    // @Body('email') email: string,
    // @Body('password') password: string,
    // @Body('name') name: string,
    @Body() createUserDto: CreateUserDto,
    @User() user: IUser,
  ) {
    return this.usersService.create(createUserDto, user);
  }

  @Get(':id')
  @ResponseMessage('Get a user')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  // @UseGuards(TestGuard)
  @Get()
  @ResponseMessage('Fetch List User with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.usersService.findAll(+currentPage, +limit, qs);
  }

  @Patch()
  @ResponseMessage('Update a user')
  update(@Body() updateUserDto: UpdateUserDto, @User() user: IUser) {
    return this.usersService.update(updateUserDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete a user')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.usersService.remove(id, user);
  }
}
