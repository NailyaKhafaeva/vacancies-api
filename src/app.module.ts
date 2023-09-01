import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { VacancyModule } from './vacancy/vacancy.module';
import { VacancyResponseModule } from './vacancy-response/vacancy-response.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UserModule,
        VacancyModule,
        VacancyResponseModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
