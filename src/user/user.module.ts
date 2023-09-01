import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Vacancy])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
