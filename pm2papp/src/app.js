const moment = require('moment');

const levels = [
  'INFO', 'WARN', 'ERROR', 'DEBUG'
];

const msgs = [
  'message a',
  'message b',
  'message c',
  'message d',
  'message e',
  'message f',
  'message g',
]

const locations = [
  'location a',
  'location b',
  'location c',
  'location d',
  'location e'
]

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function log(msg, {location, level} = { location: 'default', level: 'INFO' }) {
  console[level.toLocaleLowerCase()](`${level } [${moment().format()}] ${location} --- ${msg}`);
}

function generateLogs(initialInterval, minInterval, maxInterval) {
  setTimeout(() => {
    log(msgs[randomInt(0, 7)], {
      level:levels[randomInt(0, 4)],
      location: locations[randomInt(0, 5)]
    });
    generateLogs(randomInt(minInterval, maxInterval), minInterval, maxInterval);
  }, initialInterval)
}

generateLogs(0, 2000, 10000);
