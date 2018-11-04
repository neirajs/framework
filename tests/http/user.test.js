const dyimp = require('dyimp');
const request = require('supertest');
const app = dyimp('app');

describe('GET /user/foo', function() {
  it('response 200 ok', function(done) {
    request(app)
      .get('/user/foo')
      .expect(200, done);
  });
});

describe('GET /user/baz', function() {
  it('response 200 ok', function(done) {
    request(app)
      .get('/user/baz')
      .expect(200, done);
  });
});

describe('GET /user', function() {
  it('response 404', function(done) {
    request(app)
      .get('/user')
      .expect(404, done);
  });
});