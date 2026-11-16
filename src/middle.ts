import { Request, Response, NextFunction, response } from 'express';
const requestlogger = (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

export const requestTimer = (req: Request, res: Response, next: NextFunction) => {
    const startTimer = Date.now();

    res.on('finish', () => {
        const endtimer :number= Date.now();
        const timer:number = startTimer - endtimer
        console.log(timer)

    });
    next()
}


export default requestlogger;