import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import { ShowUserDto } from './dto/show-user.dto';
import aqp from 'api-query-params';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
  ) {}
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
  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };
  async create(createUserDto: CreateUserDto, userCreated: IUser) {
    const hashPassword = this.getHashPassword(createUserDto.password);
    let user = await this.userModel.create({
      ...createUserDto,
      password: hashPassword,
      createdBy: {
        _id: userCreated._id,
        email: userCreated.email,
      },
    });
    return {
      _id: user.id,
      createdAt: user.createdAt,
    };
  }
  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.page;
    delete filter.limit;
    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;
    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    const result = await this.userModel
      .find(filter)
      .select('-password')
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .exec();
    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, //kết quả query
    };
  }
  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not Found User';
    }

    // Exclude the password field using `.select()`
    const user = await this.userModel.findOne({ _id: id }).select('-password');

    if (!user) {
      return 'Not Found User';
    }

    return user;
  }

  findOneByUserName(username: string) {
    return this.userModel.findOne({
      email: username,
    });
  }

  isValidPassword(password: string, hashPassword: string) {
    return compareSync(password, hashPassword); // true
  }

  async update(updateUserDto: UpdateUserDto, user: IUser) {
    return await this.userModel.updateOne(
      {
        _id: updateUserDto._id,
      },
      {
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
        ...updateUserDto,
      },
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not Found User';
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );

    return this.userModel.softDelete({
      _id: id,
    });
  }
}
