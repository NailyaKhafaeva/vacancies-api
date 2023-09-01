import { Controller, Post, Get, Body, Patch, Param } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { CreateVacancyDto } from './dto/create_vacancy.dto';

@Controller('vacancy')
export class VacancyController {
    constructor(private vacancyService: VacancyService) {}

    @Post()
    create(@Body() createVacancyDto: CreateVacancyDto) {
        return this.vacancyService.create(createVacancyDto);
    }

    @Get()
    getAll() {
        return this.vacancyService.getAll();
    }

    @Patch('/update/:vacancy_id')
    updateVacancy(
        @Param('vacancy_id') vacancy_id: number,
        @Body() updateVacancyDto: UpdateVacancyDto,
    ) {
        return this.vacancyService.update(vacancy_id, updateVacancyDto);
    }
}
