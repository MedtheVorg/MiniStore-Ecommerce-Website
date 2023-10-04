import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { apiConfig } from './config/serverConfig.js';
import { router as userRouter } from './routers/user/user.router.js';
import cors from 'cors';

//express async handler Wrapper
// this basically wraps all async middlewares with a try catch block and passes the error
//to the express error handler middleware unless an error is thrown intentionally
import 'express-async-errors';
//custom Logger
import Logger from './utils/Logger.js';
import requestLogger from './utils/requestLogger.js';

const app = express();

//CONNECT TO DATABASE
connectMongoDb();

function startServer() {
  // express middlewares
  app.use(express.json());
  app.use(cors());

  //Request  / response Logger
  app.use(requestLogger);

  // health check
  app.get('/', healthCheckMiddleware);

  //ROUTES
  app.use('/auth', userRouter);

  //  not found end point
  app.use(notFound);

  // ERROR Handler
  app.use(errorHandler);
  app.listen(apiConfig.server.port, () => {
    Logger.info(`Server running on http://localhost:${apiConfig.server.port}`);
  });
}
function connectMongoDb() {
  mongoose
    .connect(apiConfig.mongoDb.url, {
      appName: 'MiniStore_E-commerce',
      dbName: 'Ecommerce_Project',
      writeConcern: { w: 'majority' },
      retryWrites: true,
    })
    .then((cn) => {
      const dataBaseName = cn.connection.db.databaseName;
      Logger.info(`Successfully connected to ${dataBaseName} database`);
      startServer();
    })
    .catch((error) => {
      Logger.error(error.message);
    });
}
function healthCheckMiddleware(req: Request, res: Response) {
  res.status(200).json({ message: 'Server is Up' });
}
function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  Logger.error(err.message);
  Logger.error(err.stack);

  res.status(500).json({ message: 'INTERNAL SERVER ERROR ☠' });
}
function notFound(req: Request, res: Response) {
  res.status(404).json({
    status: 404,
    message: 'You are trying to access an end point that does not exist',
  });
}
