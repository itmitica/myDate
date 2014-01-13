/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        }
        
        return getDaysInMonth;
    }
);
