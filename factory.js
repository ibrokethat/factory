module.exports = function factory (matcher, factories) {

  var args = Array.prototype.slice.call(arguments, 2);
  var factory = matcher.apply(null, [factories].concat(args));

  if (!factory) {
    throw new ReferenceError();//e.FactoryNotFound();
  }

  return factory.apply(null, args);
}