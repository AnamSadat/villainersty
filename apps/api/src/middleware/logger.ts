import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

export function logger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    let statusColor = chalk.white.bgBlack;

    if (res.statusCode >= 500) statusColor = chalk.red;
    else if (res.statusCode >= 400) statusColor = chalk.yellow;
    else if (res.statusCode >= 300) statusColor = chalk.cyan;
    else if (res.statusCode >= 200) statusColor = chalk.green;

    let methodBg = `[${chalk.bgWhite.black}]`;
    switch (req.method) {
      case 'GET':
        // @ts-expect-error: chalk instance is called as a function for coloring
        methodBg = chalk.bgGreen.black;
        break;
      case 'POST':
        // @ts-expect-error: chalk instance is called as a function for coloring
        methodBg = chalk.bgBlue.white;
        break;
      case 'PUT':
        // @ts-expect-error: chalk instance is called as a function for coloring
        methodBg = chalk.bgYellow.black;
        break;
      case 'DELETE':
        // @ts-expect-error: chalk instance is called as a function for coloring
        methodBg = chalk.bgRed.white;
        break;
      default:
        // @ts-expect-error: chalk instance is called as a function for coloring
        methodBg = chalk.bgMagenta.white;
    }

    console.log(
      // @ts-expect-error: chalk instance is called as a function for coloring
      `${methodBg(`[${req.method}]`)} ${req.originalUrl} → ${statusColor(res.statusCode)} (${duration}ms)`,
    );
  });

  next();
}
