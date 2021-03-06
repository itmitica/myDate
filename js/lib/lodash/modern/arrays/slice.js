/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeMax = Math.max;

  /**
   * Slices `array` from the `start` index up to, but not including, the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start index.
   * @param {number} [end=array.length] The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    var index = -1,
        length = array ? array.length : 0;

    if (typeof start == 'undefined') {
      start = 0;
    } else if (start < 0) {
      start = nativeMax(length + start, 0);
    } else if (start > length) {
      start = length;
    }
    if (typeof end == 'undefined') {
      end = length;
    } else if (end < 0) {
      end = nativeMax(length + end, 0);
    } else if (end > length) {
      end = length;
    }
    length = end - start || 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  return slice;
});
