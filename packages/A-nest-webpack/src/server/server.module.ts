import { Module } from '@nestjs/common';
import { AppServerController } from './server.controller';
import { AppServerService } from './server.service';

@Module({
	imports: [],
	controllers: [ AppServerController ],
	providers: [ AppServerService ]
})
export class AppServerModule {}
