/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function GetDaysList(dayObj) {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // getDaysList is now GetDaysList
            var days = '',
                i,
                n = this.getDaysInMonth(dayObj.year, dayObj.month),
                d;
            
            for (i = 0; i < n; i = i + 1) {
                d = i + 1;
                days = days + '<option value="' + d + '"' + ((dayObj.day === i + 1) ? 'selected' : '') + '>' + d + '</option>';
            }
            
            return days;
        }
        
        return GetDaysList;
    }
);
