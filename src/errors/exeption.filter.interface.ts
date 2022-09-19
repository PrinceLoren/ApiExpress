import { NextFunction, Request, Response } from 'express';

export interface IExeptionFilterInterface {
	catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}
