/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function GetMonthsList(dayObj) {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // getMonthsList is now GetMonthsList
            var months = '',
                i,
                m;
            
            for (i = 0; i < this.MONTHS.length; i = i + 1) {
                m = this.MONTHS[i];
                months = months + '<option value="' + m + '"' + ((dayObj.month === i) ? 'selected' : '') + '>' + m + '</option>';
            }
            
            return months;
        }
        
        return GetMonthsList;
    }
);
