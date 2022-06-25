Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

function timeConversion(s) {
    // Write your code here
    let [hours, minutes, secondsAndAMPM] = s.split(':');
    const seconds = secondsAndAMPM.slice(0, 2);
    const AMPM = secondsAndAMPM.slice(-2);

    if (hours === "12") {
        hours = "00";
      }

      if (AMPM === "PM") {
        hours = parseInt(hours, 10) + 12;
      }

    return `${hours}:${minutes}:${seconds}`;

}
