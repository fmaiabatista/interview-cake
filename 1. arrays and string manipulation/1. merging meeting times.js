const debug = false;
console.debug = (...args) => debug && console.log(...args);

input = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
  { startTime: 2, endTime: 13 },
];

expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 2, endTime: 13 },
];

function mergeRanges(meetings) {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
  
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    currentMeeting = sortedMeetings[i]
    lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
    } else {
      mergedMeetings.push(currentMeeting)
    }
  }

  return mergedMeetings;
}

const answer = mergeRanges(input);
const assert = JSON.stringify(answer) === JSON.stringify(expected);

console.clear();
console.log(`Debug is ${debug ? "💡 ON" : "💤 OFF"}`);
console.log("Answer:", JSON.stringify(answer, false, 2));
console.log("Expected:", JSON.stringify(expected, false, 2));
console.log(`Result: ${assert ? "✅ PASS" : "❌ FAIL"}`);
