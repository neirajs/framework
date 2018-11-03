const expressRouter = require('express').Router();

function routeMapper(method, path, ...rest) {
  if (method === 'get')
    expressRouter.get(path, ...rest);

  if (method === 'post')
    expressRouter.post(path, ...rest);

  if (method === 'put')
    expressRouter.put(path, ...rest);
  
  if (method === 'patch')
    expressRouter.patch(path, ...rest);

  if (method === 'delete')
    expressRouter.delete(path, ...rest);
}

const router = () => {
  function group(prefix, cb, ...middlewares) {
    cb({
      get: (suffix, ...rest) => {
        routeMapper('get', prefix.concat(suffix), ...middlewares, ...rest);
      },
      post: (suffix, ...rest) => {
        routeMapper('post', prefix.concat(suffix), ...middlewares, ...rest);
      },
      put: (suffix, ...rest) => {
        routeMapper('put', prefix.concat(suffix), ...middlewares, ...rest);
      },
      patch: (suffix, ...rest) => {
        routeMapper('patch', prefix.concat(suffix), ...middlewares, ...rest);
      },
      delete: (suffix, ...rest) => {
        routeMapper('delete', prefix.concat(suffix), ...middlewares, ...rest);
      }
    });
  }

  return Object.assign(expressRouter, {group});
};

module.exports = router();
