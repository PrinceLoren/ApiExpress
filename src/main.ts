import { LoggerService } from './logger/logger.service';
import { Container, ContainerModule, interfaces } from 'inversify';
import { ILogerInterface } from './logger/loger.interface';
import { TYPES } from './types';
import { ExeptionFilter } from './errors/exeption.filter';
import { UsersController } from './users/users.controller';
import { App } from './app';
import { IExeptionFilterInterface } from './errors/exeption.filter.interface';
import { IUserController } from './users/users.controller.interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogerInterface>(TYPES.ILogerInterface).to(LoggerService);
	bind<IExeptionFilterInterface>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<IUserController>(TYPES.UsersController).to(UsersController);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	void app.init();

	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
