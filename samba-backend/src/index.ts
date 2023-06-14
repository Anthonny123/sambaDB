import express, { Request, Response } from 'express';
import { Pool } from 'pg';

import sambaRouter from "./routes/routes"
import patrocinadorNaturalRouter from "./routes/routes"
import patrocinadorJuridicoRouter from "./routes/routes"
import escuelaSambaRouter from "./routes/routes"
import integranteEscuelaSambaRouter from "./routes/routes"

// Creación de la aplicación Express
const app = express();
const port = 3000;

app.use(express.json())
app.use('/samba', sambaRouter)
app.use('/integrante-escuela-samba', integranteEscuelaSambaRouter)
app.use('/patrocinador-juridico', patrocinadorJuridicoRouter)
app.use('/patrocinador-natural', patrocinadorNaturalRouter)
app.use('/escuela-samba', escuelaSambaRouter)

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
