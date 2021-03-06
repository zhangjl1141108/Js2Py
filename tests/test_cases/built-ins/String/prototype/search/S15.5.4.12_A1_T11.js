// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T11
description: >
    Argument is object, and instance is string.  Object with overrided
    toString function, that throw exception
includes: [$FAIL.js]
---*/

var __obj = {toString:function(){throw "intostr";}}
var __str = {str__:"ABB\u0041BABAB"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
  with(str__){
    try {
      var x = search(__obj);
      $FAIL('#1: var x = search(__obj) lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
  }
}
//
//////////////////////////////////////////////////////////////////////////////
