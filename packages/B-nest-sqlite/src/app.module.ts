import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join, resolve } from 'path';
import { PhotoModule } from './photo/photo.module';
@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: `${resolve(__dirname, '..')}/data/line.sqlite`,
			entities: [ join(__dirname, '**/**.entity{.ts,.js}') ],
			logging: true,
			synchronize: true
		}),
		PhotoModule
	]
})
export class ApplicationModule {}
