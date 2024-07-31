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
  app.use('/api/bookings', bookingRouter);

  const messageRouter = require('./message.routes');
  app.use('/api/messages', messageRouter);

  const profileRouter = require('./profile.routes');
  app.use('/api/profile', profileRouter);


};
