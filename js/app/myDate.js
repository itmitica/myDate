/*global define, document*/

define(
    [

    ],
    function () {
        "use strict";
        
        function MyDate(id) {
            
            this.targetElement = document.getElementById(id);
            this.init();
        }
        
        MyDate.prototype = {
          
            MONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          
            YEAR_OFFSET: 21,
        
            HELPER_ELEMENTS_HTML_FRAGMENT: '<fieldset class="mydate"><select class="day">{{day}}</select><select class="month">{{month}}</select><select class="year">{{year}}</select></fieldset>',
        
            init: function () {
                this.toggle();
                this.addHelperElements();
                this.bindUIActions();
            },
          
            toggle: function () {
                var elemStyle = this.targetElement.style;
                
                if (elemStyle.display === "none") {
                    elemStyle.display = "";
                } else {
                    elemStyle.display = "none";
                }
            },
            
            addHelperElements: function () {
                var today = this.getToday(),
                    lists = this.getHelperLists(today),
                    fragment = '';
                
                fragment = this.HELPER_ELEMENTS_HTML_FRAGMENT
                    .split('{{year}}').join(lists.years)
                    .split('{{month}}').join(lists.months)
                    .split('{{day}}').join(lists.days);
        
                this.targetElement.insertAdjacentHTML('afterend', fragment);
            },
        
            getToday: function () {
                var today = new Date();
                
                return {
                    day: today.getUTCDate(),
                    month: today.getUTCMonth(),
                    year: today.getUTCFullYear()
                };
            },
            
            getHelperLists: function (dayObj) {
                return {
                    years: this.getYearsList(dayObj),
                    months: this.getMonthsList(dayObj),
                    days: this.getDaysList(dayObj)
                };
            },
            
            getYearsList: function (dayObj) {
                var years = '',
                    i,
                    y;
                
                for (i = 0; i < this.YEAR_OFFSET; i = i + 1) {
                    y = dayObj.year + i;
                    years = years + '<option value="' + y + '"' + ((i === dayObj.year) ? "selected" : "") + '>' +  y + '</option>';
                }
                
                return years;
            },
            
            getMonthsList: function (dayObj) {
                var months = '',
                    i,
                    m;
                
                for (i = 0; i < this.MONTHS.length; i = i + 1) {
                    m = this.MONTHS[i];
                    months = months + '<option value="' + m + '"' + ((dayObj.month === i) ? "selected" : "") + '>' + m + '</option>';
                }
                
                return months;
            },
            
            getDaysList: function (dayObj) {
                var days = '',
                    i,
                    n = this.getDaysInMonth(dayObj.year, dayObj.month),
                    d;
                
                for (i = 0; i < n; i = i + 1) {
                    d = i + 1;
                    days = days + '<option value="' + d + '"' + ((dayObj.day === i + 1) ? "selected" : "") + '>' + d + '</option>';
                }
                
                return days;
            },
          
            getDaysInMonth: function (year, month) {
                return new Date(year, month, 0).getDate();
            },
            
            bindUIActions: function () {
                var i,
                    dateWidgets = document.getElementsByClassName('mydate');
                
                for (i = 0; i < dateWidgets.length; i = i + 1) {
                    dateWidgets[i].onchange = this.dayResetter;
                }
            },
            
            dayResetter: function (event) {
                var allSelects,
                    yearSelect,
                    monthSelect,
                    daySelect,
                    year = '',
                    month = '',
                    fragment = '';
                
                event.preventDefault();
                
                if (event.target.className !== 'day') {
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
        };

        return MyDate;
    }
);
