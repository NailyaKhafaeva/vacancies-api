import { IsNumber, IsOptional } from 'class-validator';

export class CreateVacancyDto {
    readonly vacancyName: string;

    @IsNumber()
    readonly userId: number;

    @IsOptional()
    readonly description: string;

    @IsOptional()
    readonly skills: string[];
}
