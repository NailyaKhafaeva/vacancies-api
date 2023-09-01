import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import { VacancyResponse } from 'src/vacancy-response/vacancy-response.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Vacancy, VacancyResponse])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
