const express = require('express');
const { pokeneas } = require('../data/pokeneas');
const { pickRandom } = require('../utils/random');

const router = express.Router();

router.get('/pokenea', (req, res) => {
  const p = pickRandom(pokeneas);
  const containerId = process.env.HOSTNAME || 'local-dev';
  res.json({
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    containerId
  });
});

module.exports = router;
