module.exports = app => {
  const aircraftsRouter = require('./aircraft.routes');
  app.use('/api/aircrafts', aircraftsRouter);

  // const routesRouter = require('./routes.routes');
  // app.use('/api/routes', routesRouter);

  // const authRouter = require('./auth.routes');
  // app.use('/api/auth', authRouter);
};
