// api router will mount other routers
module.exports = (app) => {
  app.use('/api/users', require('./user/user.routes'));
  app.use('/api/books', require('./book/book.routes'));
}
