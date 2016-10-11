var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  var newAlarm = new Alarm();
  setInterval(function() {
    newAlarm.setTimer();
    $('h1').html(newAlarm.currentTime);
  }, 1000);
  var timer = setInterval(function() {
    if (newAlarm.checkAlarm()) {
      $("#alarm").show();
    }
  }, 1000);

  $('#setAlarm').click(function() {
    var alarmTime = $('#alarmTime').val();
    newAlarm.setAlarm(alarmTime);
  });

  $("#snooze").click(function() {
    newAlarm.addMin();
    $("#alarm").hide();
  });

  $("#off").click(function() {
    newAlarm.alarmTime = null;
    $("#alarm").hide();
  });

});
