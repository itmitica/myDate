/*global define, document, constructor, prototype*/

define(
    [
        '../constructor'
    ],
    function (MyDate) {
        'use strict';
        
        function DayResetter(event) {
            var allSelects,
                yearSelect,
                monthSelect,
                daySelect,
                year = '',
                month = '',
                fragment = '';
            
            event.preventDefault();
            
            if (event.target.className !== 'day') {
                // strict mode prevents the use of `this` outside a constructor function
                // a constructor function starts with caps
                // dayResetter is now DayResetter
                allSelects = this.getElementsByTagName('select');
                
                yearSelect = allSelects[2];
                monthSelect = allSelects[1];
                daySelect = allSelects[0];
                
                year = yearSelect.options[yearSelect.selectedIndex].text;
                month = monthSelect.selectedIndex + 1;
                
                fragment = '<select class="day">' + MyDate.prototype.getDaysList({year: year, month: month}) + '</select>';
                
                daySelect.innerHTML = '';
                daySelect.insertAdjacentHTML('afterBegin', fragment);
            }
        }

        return DayResetter;
    }
);
