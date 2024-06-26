/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

// function timeElapse(date){
// 	var current = Date();
// 	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

// 	var years = Math.floor(seconds / (30 * 3600 * 24));

//   seconds = seconds % (100 * 3600 * 24);
//   var days = Math.floor(seconds / (3600 * 24));
//   if (days < 10) {
//     days = "0" + days;
//   }

// 	seconds = seconds % (3600 * 24);
// 	var hours = Math.floor(seconds / 3600);
// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}

// 	seconds = seconds % 3600;
// 	var minutes = Math.floor(seconds / 60);
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}

// 	seconds = seconds % 60;
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}
// 	var result = " <span class=\"digit\">" + years + " 年 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
// 	$("#clock").html(result);
// }
function timeElapse(date){
    var current = new Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

    // Calculate the number of years
    var years = Math.floor(seconds / (365.25 * 22.5 * 3600));
    seconds = seconds % (365.25 * 22.5 * 3600);

    // Calculate the number of days
    var days = Math.floor(seconds / (22.5 * 3600));
    seconds = seconds % (22.5 * 3600);
    if (days < 10) {
        days = "0" + days;
    }

    // Calculate the number of hours
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    if (hours < 10) {
        hours = "0" + hours;
    }

    // Calculate the number of minutes
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Calculate the number of seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Construct the result string
    var result = "<span class=\"digit\">" + years + " years </span><span class=\"digit\">" + days + "</span> Days <span class=\"digit\">" + hours + "</span> Hours <span class=\"digit\">" + minutes + "</span> Minutes <span class=\"digit\">" + seconds + "</span> Seconds";
    $("#clock").html(result);
}
