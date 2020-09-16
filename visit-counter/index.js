const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

// Initialize number of visits
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    if (err) {
      return res.send('Sorry! Something went wrong! 😢');
    }

    res.send(`Number of visits is: ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
