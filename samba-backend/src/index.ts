import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import cors from 'cors'

import sambaRouter from "./routes/routes"
import patrocinadorNaturalRouter from "./routes/routes"
import patrocinadorJuridicoRouter from "./routes/routes"
import escuelaSambaRouter from "./routes/routes"
import integranteEscuelaSambaRouter from "./routes/routes"
import habilidadRouter from "./routes/routes"
import colorRouter from "./routes/routes"
import rolRouter from "./routes/routes"
import lugarRouter from "./routes/routes"
import premioEspecialRouter from "./routes/routes"
import telefonoRouter from "./routes/routes"
import histIntegranteRouter from "./routes/routes"
import eventoSemAnualRouter from "./routes/routes"
import histPatrocinadorRouter from "./routes/routes"
import histPatrocinadorDonacionRouter from "./routes/routes"
import histTituloEscuelaRouter from "./routes/routes"
import organizacionCarnavalRouter from "./routes/routes"
import ganadorRouter from "./routes/routes"
import coloresEscuelasRouter from "./routes/routes"
import autoresRouter from "./routes/routes"
import habilidadIntegranteRouter from "./routes/routes"
import parentescoRouter from "./routes/routes"

// Creación de la aplicación Express
const app = express();
const port = 3001;

app.use(express.json())
app.use(cors())
app.use('/samba', sambaRouter)
app.use('/integrante-escuela-samba', integranteEscuelaSambaRouter)
app.use('/patrocinador-juridico', patrocinadorJuridicoRouter)
app.use('/patrocinador-natural', patrocinadorNaturalRouter)
app.use('/escuela-samba', escuelaSambaRouter)
app.use('/habilidad', habilidadRouter)
app.use('/color', colorRouter)
app.use('/rol', rolRouter)
app.use('/lugar', lugarRouter)
app.use('/premio-especial', premioEspecialRouter)
app.use('/telefono', telefonoRouter)
app.use('/historico-integrante', histIntegranteRouter)
app.use('/evento-semanal-anual', eventoSemAnualRouter)
app.use('/historico-patrocinador', histPatrocinadorRouter)
app.use('/historico-patrocinador-donador', histPatrocinadorDonacionRouter)
app.use('/historico-titulo-escuela', histTituloEscuelaRouter)
app.use('/organizacion-carnaval', organizacionCarnavalRouter)
app.use('/ganador', ganadorRouter)
app.use('/colores-de-escuelas', coloresEscuelasRouter)
app.use('/autor', autoresRouter)
app.use('/habilidad-integrante', habilidadIntegranteRouter)
app.use('/parentesco', parentescoRouter)


// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
