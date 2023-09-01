import { Controller, Post, Body } from '@nestjs/common';
import { VacancyResponseService } from './vacancy-response.service';
import { CreateVacancyResponseDto } from './dto/create-vacancy-response.dto';

@Controller('vacancy-response')
export class VacancyResponseController {
    constructor(private vacancyResponseService: VacancyResponseService) {}

    @Post()
    create(@Body() createVacancyResponseDto: CreateVacancyResponseDto) {
        console.log('--1--');
        return this.vacancyResponseService.create(createVacancyResponseDto);
    }
}
