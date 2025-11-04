const express = require('express');
const os = require('os');
const pokeneas = require('../data/pokeneas');
const router = express.Router();

router.get('/pokenea', (_req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length);
  const p = pokeneas[number];

  const containerId = os.hostname(); 
  res.json({
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    containerId
  });
});

module.exports = router;
