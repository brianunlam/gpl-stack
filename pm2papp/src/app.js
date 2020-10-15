const moment = require('moment');
const client = require('prom-client')
const http = require('http')
const url = require('url')

// Create a Registry which registers the metrics
const register = new client.Registry()

// Add a default label which is added to all metrics
register.setDefaultLabels({
  app: 'prom-client-pm2papp'
})

// Enable the collection of default metrics
client.collectDefaultMetrics({ register })

// Define the HTTP server
const server = http.createServer(async (req, res) => {
  // Retrieve route from request object
  const route = url.parse(req.url).pathname

  if (route === '/metrics') {
    // Return all metrics the Prometheus exposition format
    res.setHeader('Content-Type', register.contentType)
    res.end(register.metrics())
  }
})

const counter = new client.Counter({
  name: 'my_custom_metric',
  help: 'counts the number of something',
});

register.registerMetric(counter)


// Start the HTTP server which exposes the metrics on http://localhost:8080/metrics
server.listen(8080)

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
    counter.inc();

    log(msgs[randomInt(0, 7)], {
      level:levels[randomInt(0, 4)],
      location: locations[randomInt(0, 5)]
    });
    generateLogs(randomInt(minInterval, maxInterval), minInterval, maxInterval);
  }, initialInterval)
}

generateLogs(0, 2000, 10000);
