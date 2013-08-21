module.exports = Adapter;
function Adapter() {}

/**
 * Called at application startup.
 * @param connectionParams The configuration parameters
 * - If your datasource supports connection pooling, now's the time to do it
 * - If your datasource needs to poll in the background, start doing that and then call back
 * -
 */
Adapter.prototype.connect = function(connectionParams,cb) {
  throw new Error('not implemented');
}
Adapter.prototype.validate = function(rule,params) {
  // TODO
}