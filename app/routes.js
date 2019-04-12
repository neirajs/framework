const dyimp = require('dyimp');
const router = dyimp('http/router');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Here is where you can register routes for your application. These
| routes are loaded by the app.js
| it uses express.Router() that has been added some custom method
| like router.group().
|
*/
router.get('/', function(req, res) {
  return res.render('home');
})
router.group('/user', function(route) {
  route.get('/foo', function(req, res) {
    res.send('hello foo');
  });
  route.get('/baz', function(req, res) {
    res.send('hello baz');
  });
});

router.all('*', (req, res) => {
  res.status(404).send('not found!');
});

module.exports = router;