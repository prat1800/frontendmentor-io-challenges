let day = new Date;
// ***USING JQUERY
$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        $.each(data, function (index, entry) {
            $('<div class="bar"></div>')
                .attr({
                    id: 'bar-' + index,
                    "data-after": entry.day
                })
                .appendTo('#chart');

            $('<div class=day></div>')
                .attr({
                    id: 'day-' + index
                })
                .css({
                    height: entry.amount + '%'
                })
                .appendTo('#bar-' + index);

            $('<p></p>')
                .html(entry.day)
                .appendTo('#bar-' + index);

            if (day.getDay() === index) {
                console.log(day.getDay());
                $('#day-' + index).addClass('today');
            }

            $('<span><span>')
                .html("$" + entry.amount)
                .addClass('amount')
                .appendTo('#day-' + index);
        })
    })

});
