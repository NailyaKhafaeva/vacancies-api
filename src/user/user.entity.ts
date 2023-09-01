import { Vacancy } from 'src/vacancy/vacancy.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
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

    @CreateDateColumn()
    createdAt: Date;
}
