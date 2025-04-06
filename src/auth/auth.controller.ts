import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto, RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Request as RequestExpress, Response, response } from 'express';
import { IUser } from 'src/users/users.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage('User Login')
  @Post('/login')
  handleLogin(@Req() req, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user, response);
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
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Get('account')
  @ResponseMessage('Get user information')
  getAccount(@User() user: IUser) {
    return { user };
  }

  @Public()
  @Get('/refresh')
  @ResponseMessage('Get user by refresh Token')
  handleRefreshToken(
    @Req() request: RequestExpress,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refreshToken = request.cookies['refresh_token'];
    return this.authService.processNewToken(refreshToken, response);
  }
  @Get('/logout')
  @ResponseMessage('Logout user')
  handleLogout(
    @User() user: IUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.logout(response, user);
  }
}
