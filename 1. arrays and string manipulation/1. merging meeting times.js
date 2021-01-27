const debug = false;
console.debug = (...args) => debug && console.log(...args)

input = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];

function isBetween(x, a, b) {
  return x >= a && x <= b;
}

function findBusyRanges(meetings) {
  const busyRanges = [];

  meetings.forEach((meeting) => {
    if (!busyRanges.length) {
      busyRanges.push(meeting);
    }

    busyRanges.forEach((range, i) => {
      console.debug("meeting", meeting);
      console.debug("range", range);

      // -- startTime
      // if start of meeting is between an existing range
      // do not create new range and
      // resolve if endTime should be updated
      if (isBetween(meeting.startTime, range.startTime, range.endTime)) {
        if (!isBetween(meeting.endTime, range.startTime, range.endTime)) {
          range.endTime = meeting.endTime;
        }
      } else if (isBetween(meeting.endTime, range.startTime, range.endTime)) {
        // similarly,
        // if endTime is between an existing range
        // do not create new range and
        // resolve if startTime should be updated
        if (isBetween(meeting.endTime, range.startTime, range.endTime)) {
          range.startTime = meeting.startTime;
        }
      } else {
        // if start of meeting is NOT between existing ranges and
        // the last range has been tested
        // create new range
        if (i === busyRanges.length - 1) {
          busyRanges.push(meeting);
        }
      }

      console.debug("ranges", busyRanges);
      console.debug("\n\n");
    });
  });

  return busyRanges;
}

const answer = findBusyRanges(input)
const assert = JSON.stringify(answer) === JSON.stringify(expected)

console.clear()
console.log(`Debug is ${debug ? "ON" : "OFF"}`)
console.log("Answer:", JSON.stringify(answer, false, 2));
console.log("Expected:", JSON.stringify(expected, false, 2));
console.log(`Result: ${assert ? "✅ PASS" : "❌ FAIL"}`)
