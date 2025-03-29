import { Controller, Delete, Get } from '@nestjs/common';

// @Controller('user')
@Controller('mimicute')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users with mimi nhune';
  }
  @Delete('/by-id')
  findById(): string {
    return 'This action will delete a user by id';
  }
}
