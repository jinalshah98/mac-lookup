const https = require('https');

const macAddress = process.argv[2];
const apiKey = process.env.MACADDRESS_API_KEY;

const options = {
  hostname: 'api.macaddress.io',
  port: 443,
  path: `/v1?apiKey=${apiKey}&output=json&search=${macAddress}`,
  method: 'GET'
}

const req = https.request(options, res => {
  res.on('data', d => {
    process.stdout.write(JSON.parse(d).vendorDetails.companyName + '\n');
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()