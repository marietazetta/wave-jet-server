module.exports = app => {
  const aircraftsRouter = require('./aircraft.routes');
  app.use('/api/aircrafts', aircraftsRouter);

  const routesRouter = require('./flights.routes');
  app.use('/api/flights', routesRouter);

  const authRouter = require('./auth.routes');
  app.use('/api/auth', authRouter);
};
