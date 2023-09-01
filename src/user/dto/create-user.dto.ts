import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly userName: string;

    @IsEmail()
    readonly email: string;

    @IsOptional()
    readonly phoneNumber: string;
}
