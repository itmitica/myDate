/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../objects/forIn', './hasOwnProperty', '../objects/isFunction', './toString'], function(forIn, hasOwnProperty, isFunction, toString) {

  /** `Object#toString` result shortcuts */
  var objectClass = '[object Object]';

  /**
   * A fallback implementation of `isPlainObject` which checks if a given value
   * is an object created by the `Object` constructor, assuming objects created
   * by the `Object` constructor have no inherited enumerable properties and that
   * there are no `Object.prototype` extensions.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   */
  function shimIsPlainObject(value) {
    var ctor,
        result;

    // avoid non Object objects, `arguments` objects, and DOM elements
    if (!(value && toString.call(value) == objectClass) ||
        (!hasOwnProperty.call(value, 'constructor') &&
          (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor)))) {
      return false;
    }
    // In most environments an object's own properties are iterated before
    // its inherited properties. If the last iterated property is an object's
    // own property then there are no inherited enumerable properties.
    forIn(value, function(value, key) {
      result = key;
    });
    return typeof result == 'undefined' || hasOwnProperty.call(value, result);
  }

  return shimIsPlainObject;
});
