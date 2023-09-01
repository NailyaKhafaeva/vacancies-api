import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VacancyResponse } from './vacancy-response.entity';
import { Repository } from 'typeorm';
import { CreateVacancyResponseDto } from './dto/create-vacancy-response.dto';

@Injectable()
export class VacancyResponseService {
    constructor(
        @InjectRepository(VacancyResponse)
        private vacancyResponseRepository: Repository<VacancyResponse>,
    ) {}

    async create(createVacancyResponseDto: CreateVacancyResponseDto) {
        console.log('--2--');
        // const vacancyResponse = await this.vacancyResponseRepository.find({
        //     where: {
        //         userId: createVacancyResponseDto.userId,
        //         vacancyId: createVacancyResponseDto.vacancyId,
        //     },
        // });

        // if (vacancyResponse) {
        //     throw new HttpException(
        //         `Response already exist`,
        //         HttpStatus.BAD_REQUEST,
        //     );
        // }

        const res = await this.vacancyResponseRepository.save({
            userId: createVacancyResponseDto.userId,
            vacancyId: createVacancyResponseDto.vacancyId,
        });

        return res;
    }
}
