import { IsNumber } from 'class-validator';

export class CreateVacancyResponseDto {
    @IsNumber()
    readonly userId: number;

    @IsNumber()
    readonly vacancyId: number;
}
