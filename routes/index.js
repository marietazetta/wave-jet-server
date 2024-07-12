module.exports = app => {
  const aircraftsRouter = require('./aircraft.routes');
  app.use('/api/aircrafts', aircraftsRouter);

  const routesRouter = require('./flights.routes');
  app.use('/api/flights', routesRouter);

  const authRouter = require('./auth.routes');
  app.use('/api/auth', authRouter);

  const uploadRouter = require('./upload.routes');
  app.use('/api/upload', uploadRouter);

  const bookingRouter = require('./booking.routes');
  app.use('/api/profile', bookingRouter);
};
