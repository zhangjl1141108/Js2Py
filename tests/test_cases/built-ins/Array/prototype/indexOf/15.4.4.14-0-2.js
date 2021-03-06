// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-0-2
description: Array.prototype.indexOf has a length property whose value is 1.
includes: [runTestCase.js]
---*/

function testcase() {
  if (Array.prototype.indexOf.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
