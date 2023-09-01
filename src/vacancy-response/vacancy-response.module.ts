import { Module } from '@nestjs/common';
import { VacancyResponseService } from './vacancy-response.service';
import { VacancyResponseController } from './vacancy-response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import { User } from 'src/user/user.entity';
import { VacancyResponse } from './vacancy-response.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Vacancy, VacancyResponse])],
    providers: [VacancyResponseService],
    controllers: [VacancyResponseController],
})
export class VacancyResponseModule {}
