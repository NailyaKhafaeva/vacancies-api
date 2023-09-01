import { VacancyResponse } from 'src/vacancy-response/vacancy-response.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userName: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @OneToMany(() => Vacancy, (vacancy) => vacancy.vacancyName)
    vacancies: Vacancy[];

    @ManyToOne(() => VacancyResponse, (vacancyResponse) => vacancyResponse.id)
    vacancyResponses: VacancyResponse[];

    @CreateDateColumn()
    createdAt: Date;
}
