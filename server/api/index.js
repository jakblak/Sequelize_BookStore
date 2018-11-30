// api router will mount other routers
module.exports = (app) => {
  app.get('/', (req, res) => { res.send('hello world') });
  app.use('/api/users', require('./user/user.routes'));
}
