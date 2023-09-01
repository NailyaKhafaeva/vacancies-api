import { User } from 'src/user/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Vacancy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    vacancyName: string;

    @Column({ nullable: true, type: 'varchar', length: 300 })
    description: string;

    @Column({ nullable: true, type: 'varchar', array: true })
    skills: string[];

    @ManyToOne(() => User, (user) => user.id, { eager: true })
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
