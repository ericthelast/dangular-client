'use strict';

describe('Service: Order', function () {

  // load the service's module
  beforeEach(module('client2App'));

  // instantiate service
  var Order;
  beforeEach(inject(function (_Order_) {
    Order = _Order_;
  }));

  it('should do something', function () {
    expect(!!Order).toBe(true);
  });

});
