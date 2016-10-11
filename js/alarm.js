function Alarm() {
  this.currentTime = null;
  this.alarmTime = null;
}

Alarm.prototype.setTimer = function() {
  this.currentTime = moment().format("HH:mm:ss");
};

Alarm.prototype.setAlarm = function(time) {
  this.alarmTime = moment(time, "HH:mm").format("HH:mm:ss");
};

Alarm.prototype.addMin = function() {
  this.alarmTime = moment().add(1, 'm').format("HH:mm:ss");
};

Alarm.prototype.checkAlarm = function() {
  if (this.currentTime === this.alarmTime) {
      return true;
    } else {
      return false;
    }
};

exports.alarmModule = Alarm;
