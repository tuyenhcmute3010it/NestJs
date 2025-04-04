import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, RegisterUserDto } from 'src/users/dto/create-user.dto';
import { genSaltSync, hashSync } from 'bcryptjs';
import { UsersModule } from 'src/users/users.module';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/users/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
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
  async login(user: IUser) {
    const { _id, name, email, role } = user;
    const payload = {
      sub: 'token login',
      iss: 'form server',
      _id,
      name,
      email,
      role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      _id,
      name,
      email,
      role,
    };
  }

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };
  async register(registerUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(registerUserDto.password);
    let user = await this.userModel.create({
      email: registerUserDto.email,
      password: hashPassword,
      name: registerUserDto.name,
      age: registerUserDto.age,
      gender: registerUserDto.gender,
      address: registerUserDto.address,
      role: 'USER',
    });
    return {
      _id: user._id,
      createdAt: user.createdAt,
    };
  }
}
