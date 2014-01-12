/*global define, document, constructor, prototype*/

define(
    [
        '../app/constructor',
        '../app/prototype'
    ],
    function (constructor, prototype) {
        "use strict";
        
        constructor.prototype = prototype;

        return constructor;
    }
);
