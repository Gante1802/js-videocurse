const fs = require('fs');
const express = require('express');
const morgnan = require('morgan');

const app = express();
const tourRoute = require('./routes/tourRoute');
const userrRoute = require('./routes/userRoute');

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/tours', tourRouter);

const userRouter = express.Router();

app.route('/api/v1/users').get(getAllUsers).post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
});
