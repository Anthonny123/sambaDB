import express from "express"

//Samba
import { getSambaData, insertData } from "../controllers/sambaController";
import { getIntegranteEscuelaData, insertDataIntegranteEscuelaSamba } from "../controllers/integranteEscuelaController";
import { getPatrocinadorJuridicoData, insertDataPatrocinadorJuridico } from "../controllers/patrocinadorJuridicoController";
import { getPatrocinadorNaturalData, insertDataPatrocinadorNatural } from "../controllers/patrocinadorNaturalController";
import { getEscuelaSambalData, insertEscuelaSamba } from "../controllers/escuelaSambaController";

const sambaRouter = express.Router();
const escuelaSambaRouter = express.Router();
const integranteEscuelaSambaRouter = express.Router();
const patrocinadorJuridicoRouter = express.Router();
const patrocinadorNaturalRouter = express.Router();

/* RUTAS PARA SAMBA */

sambaRouter.route('/obtener-datos-samba').get(getSambaData)
sambaRouter.route('/insertar-datos-samba').post(insertData)

/* RUTAS PARA ESCUELA SAMBA */

escuelaSambaRouter.route('/insertar-datos-escuela-samba').post(insertEscuelaSamba)
escuelaSambaRouter.route('/obtener-datos-escuela-samba').get(getEscuelaSambalData)

/* RUTAS PARA INTEGRANTE ESCUELA */

integranteEscuelaSambaRouter.route('/insertar-datos-integrante-escuela-samba').post(insertDataIntegranteEscuelaSamba)
integranteEscuelaSambaRouter.route('/obtener-datos-integrante-escuela-samba').get(getIntegranteEscuelaData)

/* RUTAS PARA PATROCINADOR JURIDICO */

patrocinadorJuridicoRouter.route('/obtener-datos-patrocinador-juridico').get(getPatrocinadorJuridicoData)
patrocinadorJuridicoRouter.route('/insertar-datos-patrocinador-juridico').post(insertDataPatrocinadorJuridico)

/* RUTAS PARA PATROCINADOR NATURAL */

patrocinadorNaturalRouter.route('/obtener-datos-patrocinador-natural').get(getPatrocinadorNaturalData)
patrocinadorNaturalRouter.route('/insertar-datos-patrocinador-natural').post(insertDataPatrocinadorNatural)


export default [sambaRouter, escuelaSambaRouter, integranteEscuelaSambaRouter, patrocinadorJuridicoRouter, patrocinadorNaturalRouter]