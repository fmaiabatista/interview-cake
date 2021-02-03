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
  meetings.sort((a, b) => a.startTime - b.startTime);

  for (let i = 1; i < meetings.length; i++) {
    currentMeeting = meetings[i]
    lastMergedMeeting = meetings[i - 1]

    console.debug("\n\n", i)
    console.debug("currentMeeting", currentMeeting)
    console.debug("lastMergedMeeting", lastMergedMeeting)

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
      meetings.splice(i, 1)
      i--
      console.debug("meetings", meetings)
    } else {
      console.debug("meetings", meetings)
      continue;
    }
  }
}

mergeRanges(input)
const answer = input;
const assert = JSON.stringify(answer) === JSON.stringify(expected);

console.clear();
console.log(`Debug is ${debug ? "💡 ON" : "💤 OFF"}`);
console.log("Answer:", JSON.stringify(answer, false, 2));
console.log("Expected:", JSON.stringify(expected, false, 2));
console.log(`Result: ${assert ? "✅ PASS" : "❌ FAIL"}`);
