const fetch = require('node-fetch');
test('backend responds', async () => {
  const r = await fetch('http://localhost:5000/api/hello');
  const j = await r.json();
  expect(j.status).toBe('ok');
}, 15000);
