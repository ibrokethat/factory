module.exports = function factory (matcher, factories) {

  if (typeof matcher !== 'function') {
    throw new TypeError('matcher is not a function');
  }

  var args = Array.prototype.slice.call(arguments, 2);
  var factory = matcher.apply(null, [factories].concat(args));

  if (!factory) {
    throw new ReferenceError();//e.FactoryNotFound();
  }

  if (typeof factory !== 'function') {
    throw new TypeError('factory is not a function');
  }

  return factory.apply(null, args);
}
