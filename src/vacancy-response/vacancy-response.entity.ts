import { User } from 'src/user/user.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class VacancyResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id, { eager: true })
    userId: number;

    @ManyToOne(() => Vacancy, (vacancy) => vacancy.id, { eager: true })
    vacancyId: number;

    @Column({ type: 'bool', default: false })
    flag: boolean;

    @CreateDateColumn()
    createdAt: Date;
}
