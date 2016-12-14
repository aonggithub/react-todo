const express = require('express');
const _ourController = require('./controllers/_our-controller.js');
const _ticketController = require('./controllers/_ticket-control.js');
const _todoController = require('./controllers/_todo-control.js');

module.exports = function(app){
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.get('/helloworld', _ourController.helloworld)
  apiRoutes.post('/create-new-ticket', _ticketController.createTicket)
  apiRoutes.post('/saveTodo', _todoController.createTodo)
  apiRoutes.get('/getTodo', _todoController.getTodo)

  app.use('/api', apiRoutes);
}
