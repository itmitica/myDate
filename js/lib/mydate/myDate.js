/*global define, document, constructor, prototype*/

define(
    [
        './constructor',
        './prototype'
    ],
    function (constructor, prototype) {
        'use strict';
        
        constructor.prototype = prototype;

        return constructor;
    }
);
