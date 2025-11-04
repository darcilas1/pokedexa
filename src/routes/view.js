const express = require('express');
const { pokeneas } = require('../data/pokeneas');
const { pickRandom } = require('../utils/random');

const router = express.Router();

router.get('/pokenea', (req, res) => {
  const p = pickRandom(pokeneas);
  const containerId = process.env.HOSTNAME || 'local-dev';

  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Pokeneas</title>
  <style>
    body { font-family: system-ui, Arial; margin: 2rem; display: grid; gap: 1rem; }
    img { max-width: 320px; border-radius: 12px; }
    .card { padding: 1rem; border: 1px solid #eee; border-radius: 12px; }
    .muted { color: #777; font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>${p.nombre}</h1>
  <div class="card">
    <img src="${p.imagen}" alt="${p.nombre}" />
    <p><em>"${p.frase}"</em></p>
  </div>
  <p class="muted">Container: <strong>${containerId}</strong></p>
</body>
</html>`);
});

module.exports = router;
