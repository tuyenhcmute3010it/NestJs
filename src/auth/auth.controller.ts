import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto, RegisterUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  // @UseGuards(JwtAuthGuard)
  // @Public()
  @Get('profile1')
  getProfile1(@Request() req) {
    return req.user;
  }

  @Public()
  @ResponseMessage('Register a new user')
  @Post('/register')
  register(@Body() registerUserDto: CreateUserDto) {
    return this.authService.register(registerUserDto);
  }
}
