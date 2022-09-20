import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class AuthGuard implements IMiddleware {
	execute({ user }: Request, res: Response, next: NextFunction): void {
		if (user) {
			next();
		} else {
			res.status(401).send({ error: 'You are not authorized' });
		}
	}
}
