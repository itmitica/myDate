/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function GetHelperLists(dayObj) {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // getHelperLists is now GetHelperLists
            return {
                years: this.getYearsList(dayObj),
                months: this.getMonthsList(dayObj),
                days: this.getDaysList(dayObj)
            };
        }
        
        return GetHelperLists;
    }
);
