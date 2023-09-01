import { Module } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Vacancy } from './vacancy.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Vacancy])],
    controllers: [VacancyController],
    providers: [VacancyService],
})
export class VacancyModule {}
