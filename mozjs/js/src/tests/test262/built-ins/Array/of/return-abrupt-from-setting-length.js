// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.of
es6id: 22.1.2.3
description: >
  Return abrupt from setting the length property.
info: |
  Array.of ( ...items )

  ...
  9. Let setStatus be Set(A, "length", len, true).
  10. ReturnIfAbrupt(setStatus).
  ...
---*/

function T() {
  Object.defineProperty(this, 'length', {
    set: function() {
      throw new Test262Error();
    }
  });
}

assert.throws(Test262Error, function() {
  Array.of.call(T);
});

reportCompare(0, 0);
