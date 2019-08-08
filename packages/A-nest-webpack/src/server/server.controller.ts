import { Controller, Get } from '@nestjs/common';
import { AppServerService } from './server.service';

@Controller()
export class AppServerController {
	constructor(private readonly appService: AppServerService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}
