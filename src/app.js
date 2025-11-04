const express = require('express');
const os = require("os");
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/view');

const app = express();

// Rutas
app.use('/api', apiRoutes);   
app.use('/', viewRoutes);     

// Salud
app.get('/health', (_req, res) => res.json({ ok: true, at: new Date().toISOString() }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Pokedexa escuchando en puerto ${PORT}`);
});
