/*global define, document, constructor, prototype*/

define(
    [

    ],
    function () {
        "use strict";
        
        function MyDate(id) {
            this.targetElement = document.getElementById(id);
            this.init();
        }

        return MyDate;
    }
);
