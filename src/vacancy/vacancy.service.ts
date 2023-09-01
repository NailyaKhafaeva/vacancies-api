import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from './vacancy.entity';
import { Repository } from 'typeorm';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { CreateVacancyDto } from './dto/create_vacancy.dto';

@Injectable()
export class VacancyService {
    constructor(
        @InjectRepository(Vacancy)
        private vacancyRepository: Repository<Vacancy>,
    ) {}

    async create(createVacancyDto: CreateVacancyDto) {
        const vacancy = await this.vacancyRepository.save({
            vacancyName: createVacancyDto.vacancyName,
            description: createVacancyDto.description,
            skills: createVacancyDto.skills,
            userId: createVacancyDto.userId,
        });

        return vacancy;
    }

    async getAll() {
        const vacancies = await this.vacancyRepository.find();
        return vacancies;
    }

    async update(vacancy_id: number, updateVacancyDto: UpdateVacancyDto) {
        const vacancy = await this.vacancyRepository.findOne({
            where: { id: vacancy_id },
        });

        if (!vacancy) {
            throw new HttpException(
                `This vacancy doesn't exist`,
                HttpStatus.NOT_FOUND,
            );
        }

        vacancy.vacancyName = updateVacancyDto.vacancyName;
        vacancy.description = updateVacancyDto.description;
        vacancy.skills = updateVacancyDto.skills;

        await this.vacancyRepository.update(vacancy_id, vacancy);
        return vacancy;
    }
}
