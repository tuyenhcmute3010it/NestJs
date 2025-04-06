import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/users/users.interface';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { response, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
  ) {}
  // username / pass la 2 tham so thu vien passport no nem ve
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUserName(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        return user;
      }
    } else if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: IUser, response: Response) {
    const { _id, name, email, role } = user;
    const payload = {
      sub: 'token login',
      iss: 'form server',
      _id,
      name,
      email,
      role,
    };
    const refreshToken = this.createRefreshToken(payload);
    // update user with refresh token
    await this.usersService.updateUserToken(refreshToken, _id);

    // set refresh_token as cookies
    response.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
    });
    return {
      access_token: this.jwtService.sign(payload),
      refreshToken,
      user: {
        _id,
        name,
        email,
        role,
      },
    };
  }

  async register(registerUser: RegisterUserDto) {
    let user = await this.usersService.register(registerUser);
    return {
      _id: user?._id,
      createdAt: user?.createdAt,
    };
  }

  createRefreshToken = (payload) => {
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn:
        ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
    });
    return refreshToken;
  };
  processNewToken = async (refreshToken: string, response: Response) => {
    try {
      this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
      let user = await this.usersService.findUserByToken(refreshToken);

      if (user) {
        // update refresh_token
        const { _id, name, email, role } = user;
        const payload = {
          sub: 'token refresh',
          iss: 'form server',
          _id,
          name,
          email,
          role,
        };
        const refreshToken = this.createRefreshToken(payload);
        // update user with refresh token
        await this.usersService.updateUserToken(refreshToken, _id.toString());

        // set refresh_token as cookies
        response.clearCookie('refresh_token');
        response.cookie('refresh_token', refreshToken, {
          httpOnly: true,
          maxAge:
            ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
        });
        return {
          access_token: this.jwtService.sign(payload),
          refreshToken,
          user: {
            _id,
            name,
            email,
            role,
          },
        };
      } else {
        throw new BadRequestException(
          'Refresh token invalid , Pls Login again',
        );
      }
      console.log(user);
    } catch (error) {
      throw new BadRequestException('Refresh token invalid , Pls Login again');
    }
  };
  logout = async (response: Response, user: IUser) => {
    await this.usersService.updateUserToken('', user._id);
    response.clearCookie('refresh_token');
    return 'ok';
  };
}
