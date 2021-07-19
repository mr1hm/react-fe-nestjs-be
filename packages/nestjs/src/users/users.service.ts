import { Injectable } from '@nestjs/common';

import { User } from './users.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const user = User.create(createUserDto);
    await user.save();

    delete user.password;
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async findById(id: number): Promise<User> {
    return await User.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await User.findOne({
      where: {
        email: email
      },
    });
  }
}
