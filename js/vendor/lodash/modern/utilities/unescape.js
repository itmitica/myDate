/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internals/reEscapedHtml', '../internals/unescapeHtmlChar'], function(reEscapedHtml, unescapeHtmlChar) {

  /**
   * The inverse of `_.escape`; this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
   * corresponding characters.
   *
   * Note: No other HTML entities are unescaped. To unescape additional HTML
   * entities use a third-party library like [_he_](http://mths.be/he).
   *
   * @static
   * @memberOf _
   * @category Strings
   * @param {string} string The string to unescape.
   * @returns {string} Returns the unescaped string.
   * @example
   *
   * _.unescape('fred, barney &amp; pebbles');
   * // => 'fred, barney & pebbles'
   */
  function unescape(string) {
    if (string == null) {
      return '';
    }
    string = String(string);
    return string.indexOf(';') < 0 ? string : string.replace(reEscapedHtml, unescapeHtmlChar);
  }

  return unescape;
});
