module.exports = Adapter;
function Adapter() {}
Adapter.prototype.connect = function() {
  throw new Error('not implemented');
}
Adapter.prototype.validate = function(rule,params) {
  // TODO
}