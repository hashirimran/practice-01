var baseRouteHandler;

function processRoute() {
  baseRouteHandler(getPath());
}

function getPath() {
  return window.location.hash.replace(/^#(\/)?/, '');
}

export default {
  getPath,
  prefix: '/#/',
  fire: function(route) {
    window.location.hash = route;
  },
  init: function(routeHandler) {
    baseRouteHandler = routeHandler;
    window.onhashchange = processRoute;
    processRoute();
  }
};
