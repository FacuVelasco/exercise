import assert from 'assert';
import { hexadecimalToBinary, binaryToHexadecimal } from '../lib/hexa-binary-converter';

describe('hexadecimal to binary', function() {
  it('"4F21" should be "100 1111 0010 0001"', function() {
    assert.equal('100111100100001', hexadecimalToBinary('4F21'));
  });
  it('0 should be always 0', function() {
    assert.equal('0', hexadecimalToBinary('0'));
  });
});

describe('binary to hexadecimal', function() {
  it('"100 1111 0010 0001" should be "4F21"', function() {
    assert.equal('4F21', binaryToHexadecimal('100111100100001'));
  });
  it('0 should be always 0', function() {
    assert.equal('0', binaryToHexadecimal('0'));
  });
});