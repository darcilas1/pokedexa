const express = require('express');
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/view');

const app = express();
const port = 3000;

app.use('/api', apiRoutes);   
app.use('/', viewRoutes);     

app.listen(port, () => {
  console.log(`Pokedexa escuchando en puerto ${port}`);
});
