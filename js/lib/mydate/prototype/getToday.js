/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function getToday() {
            var today = new Date();
            
            return {
                day: today.getUTCDate(),
                month: today.getUTCMonth(),
                year: today.getUTCFullYear()
            };
        }
        
        return getToday;
    }
);
