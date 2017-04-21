import assert from 'assert';
import { fazzBizzBarr } from '../lib/fazz-bizz-barr.js';

describe('Fazz Bizz Barr', function() {
  it('Passing 100, the final element should be Bizz', function() {
    assert.ok('Bizz ' === fazzBizzBarr(100));
  });
  it('Passing 0, should be "undefined" because it never enter the loop', function() {
    assert.ok(undefined === fazzBizzBarr(0));
  });
});