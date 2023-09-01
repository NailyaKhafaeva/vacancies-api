import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        const candidate = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });

        if (candidate) {
            throw new HttpException(
                `This email already exist!`,
                HttpStatus.BAD_REQUEST,
            );
        }

        const user = await this.userRepository.save({
            email: createUserDto.email,
            userName: createUserDto.userName,
            phoneNumber: createUserDto.phoneNumber,
        });

        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        return users;
    }
}
