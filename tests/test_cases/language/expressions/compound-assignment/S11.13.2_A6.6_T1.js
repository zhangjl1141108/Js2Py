// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator calls PutValue(lref, v)
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    declarative environment record. PutValue(lref, v) uses the initially
    created Reference even if a more local binding is available.
    Check operator is "x <<= y".
flags: [noStrict]
---*/

function testCompoundAssignment() {
  var x = 1;
  var innerX = (function() {
    x <<= (eval("var x = 2;"), 3);
    return x;
  })();

  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 8) {
    $ERROR('#2: x === 8. Actual: ' + (x));
  }
}
testCompoundAssignment();