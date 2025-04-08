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
import {
  CreateUserDto,
  RegisterUserDto,
  UserLoginDto,
} from 'src/users/dto/create-user.dto';
import { Request as RequestExpress, Response, response } from 'express';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private roleService: RolesService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @UseGuards(ThrottlerGuard)
  @Throttle(5, 60)
  @ApiBody({ type: UserLoginDto })
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

  @Get('/account')
  @ResponseMessage('Get user information')
  async getAccount(@User() user: IUser) {
    const temp = (await this.roleService.findOne(user.role._id)) as any;
    user.permissions = temp.permissions;
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
