import { IsOptional } from 'class-validator';

export class UpdateVacancyDto {
    @IsOptional()
    readonly vacancyName: string;

    @IsOptional()
    readonly userId: number;

    @IsOptional()
    readonly description: string;

    @IsOptional()
    readonly skills: string[];
}
