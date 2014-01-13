/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function GetYearsList(dayObj) {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // getYearsList is now GetYearsList
            var years = '',
                i,
                y;
            
            for (i = 0; i < this.YEAR_OFFSET; i = i + 1) {
                y = dayObj.year + i;
                years = years + '<option value="' + y + '"' + ((i === dayObj.year) ? 'selected' : '') + '>' +  y + '</option>';
            }
            
            return years;
        }
        
        return GetYearsList;
    }
);
