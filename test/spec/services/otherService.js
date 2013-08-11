'use strict';

describe('Service: otherService', function () {

  // load the service's module
  beforeEach(module('ga-lib'));

  // instantiate service
  var otherService;
  beforeEach(inject(function (_otherService_) {
    otherService = _otherService_;
  }));

  it('should do something', function () {
    expect(!!otherService).toBe(true);
  });

});
