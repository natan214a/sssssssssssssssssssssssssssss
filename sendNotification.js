const https = require('https');

const appId = 'SEU_APP_ID_AQUI'; // seu App ID OneSignal
const apiKey = 'SUA_REST_API_KEY_AQUI'; // sua REST API Key

const message = {
  app_id: appId,
  headings: { "en": "Notificação Automática" },
  contents: { "en": "Esta notificação foi enviada automaticamente via API OneSignal." },
  included_segments: ["Subscribed Users"],
  url: "https://seusite.vercel.app"
};

const data = JSON.stringify(message);

const options = {
  hostname: 'onesignal.com',
  path: '/api/v1/notifications',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Basic ${apiKey}`
  }
};

const req = https.request(options, (res) => {
  let responseData = '';
  res.on('data', chunk => responseData += chunk);
  res.on('end', () => console.log('Resposta OneSignal:', responseData));
});

req.on('error', (e) => console.error('Erro:', e));

req.write(data);
req.end();
