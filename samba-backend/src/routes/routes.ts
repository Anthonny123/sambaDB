import express from "express"

//Samba
import { getSambaData, insertData, deleteSamba, updateSamba } from "../controllers/sambaController";
import { getIntegranteEscuelaData, insertDataIntegranteEscuelaSamba, deleteIntegranteEscuelaSamba, updateIntegranteEscuelaSamba, getNombreEstudiantes } from "../controllers/integranteEscuelaController";
import { getPatrocinadorJuridicoData, getNombreDeEmpresa, insertDataPatrocinadorJuridico, deletePatrocinadorJuridico, updatePatrocinadorJuridico } from "../controllers/patrocinadorJuridicoController";
import { getNatural, getPatrocinadorNaturalData, insertDataPatrocinadorNatural, deletePatrocinadorNatural, updatePatrocinadorNatural } from "../controllers/patrocinadorNaturalController";
import { getEscuelaSambalData, insertEscuelaSamba, deleteEscuelaSamba, updateEscuelaSamba, getNombreEscuelas } from "../controllers/escuelaSambaController";
import { getHabilidades, insertHabilidad, deleteHabilidad, updateHabilidad } from "../controllers/habilidadController";
import { getColores, insertColor, deleteColor, updateColor } from "../controllers/colorController";
import { getRol, insertRol, deleteRol, updateRol } from "../controllers/rolController";
import { getLugar, insertLugar, deleteLugar, updateLugar } from "../controllers/lugarController";
import { getPremiosEspeciales, insertPremioEspecial, deletePremioEspecial, updatePremioEspecial } from "../controllers/premioEspecialController";
import { getTelefonos, insertTelefono, deleteTelefono, updateTelefono } from "../controllers/telefonoController";
import { getHistIntegrante, insertHistIntegrante, deleteHistIntegrante, updateHistIntegrante } from "../controllers/histIntegrante";
import { getEventoSemAnual, insertEventoSemAnual, deleteEventoSemAnual, updateEventoSemAnual } from "../controllers/eventoSemAnualController";
import { getHistPatrocinador, insertHistPatrocinador, deleteHistPatrocinador, updateHistPatrocinador, getAllPartners, getCodeAndNameInAllPartners } from "../controllers/histPatrocinadorController";
import { getPatrocinadorDonacion, insertPatrocinadorDonacion, deletePatrocinadorDonacion, updatePatrocinadorDonacion } from "../controllers/patrocinadorDonacionController";
import { getHistTituloEscuela, insertHistTituloEscuela, deleteHistTituloEscuela, updateHistTituloEscuela } from "../controllers/histTituloEscuelaController";
import { getOrganizacionCarnaval, insertOrganizacionCarnaval, deleteOrganizacionCarnaval, updateOrganizacionCarnaval } from "../controllers/organizacionCarnavalController";
import { getGanador, insertGanador, deleteGanador, updateGanador } from "../controllers/ganadorController";
import { getColoresEscuelas, insertColoresEscuela, deleteColoresEscuela, updateColoresEscuela } from "../controllers/escuelaColores";
import { getAutores, insertAutores, deleteAutores, updateAutores } from "../controllers/autoresControllers";
import { getHabilidadesIntegrantes, insertHabilidadesIntegrantes, deleteHabilidadesIntegrantes, updateHabilidadesIntegrantes } from "../controllers/habilidadesIntegrantesController";
import { getParentesco, insertParentesco, deleteParentesco, updateParentesco } from "../controllers/parentescoController";

const sambaRouter = express.Router();
const escuelaSambaRouter = express.Router();
const integranteEscuelaSambaRouter = express.Router();
const patrocinadorJuridicoRouter = express.Router();
const patrocinadorNaturalRouter = express.Router();
const habilidadRouter = express.Router();
const colorRouter = express.Router();
const rolRouter = express.Router();
const lugarRouter = express.Router();
const premioEspecialRouter = express.Router();
const telefonoRouter = express.Router();
const histIntegranteRouter = express.Router();
const eventoSemAnualRouter = express.Router()
const histPatrocinadorRouter = express.Router();
const patrocinadorDonacionRouter = express.Router();
const histTituloEscuelaRouter = express.Router();
const organizacionCarnavalRouter = express.Router();
const ganadorRouter = express.Router();
const coloresEscuelasRouter = express.Router();
const autoresRouter = express.Router()
const habilidadIntegranteRoute = express.Router()
const parentescoRouter = express.Router();

/* RUTAS PARENTESCO */
parentescoRouter.route('/obtener-parentesco').get(getParentesco)
parentescoRouter.route('/insertar-parentesco').post(insertParentesco)
parentescoRouter.route('/eliminar-parentesco/:cie1/:cie2').delete(deleteParentesco)
parentescoRouter.route('/actualizar-parentesco/:cie1/:cie2').put(updateParentesco)

/* RUTAS HABILIDADES E INTEGRANTE */
habilidadIntegranteRoute.route('/obtener-habilidades-integrantes').get(getHabilidadesIntegrantes)
habilidadIntegranteRoute.route('/insertar-habilidades-integrantes').post(insertHabilidadesIntegrantes)
habilidadIntegranteRoute.route('/eliminar-habilidades-integrantes/:cie/:hab').delete(deleteHabilidadesIntegrantes)
habilidadIntegranteRoute.route('/actualizar-habilidades-integrantes/:cie/:hab').put(updateHabilidadesIntegrantes)

/* RUTA DE AUTORES */
autoresRouter.route('/obtener-autores').get(getAutores)
autoresRouter.route('/insertar-autores').post(insertAutores)
autoresRouter.route('/eliminar-autores/:cs/:cie/:ces/:fi').delete(deleteAutores)
autoresRouter.route('/actualizar-autores/:cs/:cie/:ces/:fi').put(updateAutores)

/* RUTA COLORES ESCUELAS  */
coloresEscuelasRouter.route('/obtener-colores-de-escuela').get(getColoresEscuelas)
coloresEscuelasRouter.route('/insertar-colores-de-escuelas').post(insertColoresEscuela)
coloresEscuelasRouter.route('/eliminar-colores-de-escuelas/:ces/:cc').delete(deleteColoresEscuela)
coloresEscuelasRouter.route('/actualizar-colores-de-escuelas/:ces/:cc').put(updateColoresEscuela)

/* RUTA GANADORES */
ganadorRouter.route('/obtener-ganador').get(getGanador)
ganadorRouter.route('/insertar-ganador').post(insertGanador)
ganadorRouter.route('/eliminar-ganador/:cpe/:ano').delete(deleteGanador)
ganadorRouter.route('/actualizar-ganador/:cpe/:ano').put(updateGanador)

/* RUTA ORGANIZACION CARNAVAL */
organizacionCarnavalRouter.route('/obtener-organizacion-carnaval').get(getOrganizacionCarnaval)
organizacionCarnavalRouter.route('/insertar-organizacion-carnaval').post(insertOrganizacionCarnaval)
organizacionCarnavalRouter.route('/eliminar-organizacion-carnaval').delete(deleteOrganizacionCarnaval)
organizacionCarnavalRouter.route('/actualizar-organizacion-carnaval/:ano/:ces/:cie/:fi/:cr').put(updateOrganizacionCarnaval)

/* RUTA HISTORICO TITULO ESCUELA */
histTituloEscuelaRouter.route('/obtener-historico-titulo-escuela').get(getHistTituloEscuela)
histTituloEscuelaRouter.route('/insertar-historico-titulo-escuela').post(insertHistTituloEscuela)
histTituloEscuelaRouter.route('/eliminar-historico-titulo-escuela/:ces/:ano').delete(deleteHistTituloEscuela)
histTituloEscuelaRouter.route('/actualizar-historico-titulo-escuela/:ces/:ano').put(updateHistTituloEscuela)


/* RUTA PATROCINADOR DONACION */
patrocinadorDonacionRouter.route('/obtener-patrocinador-donacion').get(getPatrocinadorDonacion)
patrocinadorDonacionRouter.route('/insertar-patrocinador-donacion').post(insertPatrocinadorDonacion)
patrocinadorDonacionRouter.route('/eliminar-patrocinador-donacion/:id').delete(deletePatrocinadorDonacion)
patrocinadorDonacionRouter.route('/actualizar-patrocinador-donacion/:id').put(updatePatrocinadorDonacion)

/* RUTA HISTORICO PATROCINADOR */
histPatrocinadorRouter.route('/obtener-historico-patrocinador').get(getHistPatrocinador)
histPatrocinadorRouter.route('/insertar-historico-patrocinador').post(insertHistPatrocinador)
histPatrocinadorRouter.route('/eliminar-historico-patrocinador/:id').delete(deleteHistPatrocinador)
histPatrocinadorRouter.route('/actualizar-historico-patrocinador/:id').put(updateHistPatrocinador)
histPatrocinadorRouter.route('/obtener-patrocinadores').get(getAllPartners)
histPatrocinadorRouter.route('/obtener-nombre-patrocinadores-con-codigo').get(getCodeAndNameInAllPartners)



/* RUTA EVENTOS SEMANALES ANUALES */
eventoSemAnualRouter.route('/obtener-datos-evento-sem-anual').get(getEventoSemAnual)
eventoSemAnualRouter.route('/insertar-datos-evento-sem-anual').post(insertEventoSemAnual)
eventoSemAnualRouter.route('/eliminar-datos-evento-sem-anual/:id/:ces').delete(deleteEventoSemAnual)
eventoSemAnualRouter.route('/actualizar-datos-evento-sem-anual/:id/:ces').put(updateEventoSemAnual )


/* RUTA PARA HISTORIAL DE INTEGRANTES */
histIntegranteRouter.route('/obtener-datos-historial-integrante').get(getHistIntegrante)
histIntegranteRouter.route('/insertar-datos-historial-integrante').post(insertHistIntegrante)
histIntegranteRouter.route('/eliminar-datos-historial-integrante/:ces/:cie/:fi').delete(deleteHistIntegrante)
histIntegranteRouter.route('/actualizar-datos-historial-integrante/:ces/:cie').put(updateHistIntegrante)


/* RUTA PARA LOS TELEFONOS */
telefonoRouter.route('/obtener-datos-telefonos').get(getTelefonos)
telefonoRouter.route('/insertar-datos-telefonos').post(insertTelefono)
telefonoRouter.route('/eliminar-datos-telefonos/:nt').delete(deleteTelefono)
telefonoRouter.route('/actualizar-datos-telefonos/:ci/:ca/:nt').put(updateTelefono)


/* RUTA PARA LOS PREMIOS ESPECIALES */
premioEspecialRouter.route('/obtener-datos-premio-especial').get(getPremiosEspeciales)
premioEspecialRouter.route('/insertar-datos-premio-especial').post(insertPremioEspecial)
premioEspecialRouter.route('/eliminar-datos-premio-especial/:id').delete(deletePremioEspecial)
premioEspecialRouter.route('/actualizar-datos-premio-especial/:id').put(updatePremioEspecial)

/* RUTA PARA LOS LUGARES */
lugarRouter.route('/obtener-datos-lugar').get(getLugar)
lugarRouter.route('/insertar-datos-lugar').post(insertLugar)
lugarRouter.route('/eliminar-datos-lugar/:id').delete(deleteLugar)
lugarRouter.route('/actualizar-datos-lugar/:id').put(updateLugar)

/* RUTAS PARA LOS ROLES */
rolRouter.route('/obtener-datos-rol').get(getRol)
rolRouter.route('/insertar-datos-rol').post(insertRol)
rolRouter.route('/eliminar-datos-rol/:id').delete(deleteRol)
rolRouter.route('/actualizar-datos-rol/:id').put(updateRol)

/* RUTAS PARA COLORES */
colorRouter.route('/obtener-datos-colores').get(getColores)
colorRouter.route('/insertar-datos-colores').post(insertColor)
colorRouter.route('/eliminar-datos-colores/:id').delete(deleteColor)
colorRouter.route('/actualizar-datos-colores/:id').put(updateColor)

/* RUTAS PARA HABILIDAD */
habilidadRouter.route('/obtener-datos-habilidades').get(getHabilidades)
habilidadRouter.route('/insertar-datos-habilidades').post(insertHabilidad)
habilidadRouter.route('/eliminar-datos-habilidades/:id').delete(deleteHabilidad)
habilidadRouter.route('/actualizar-datos-habilidades/:id').put(updateHabilidad)


/* RUTAS PARA SAMBA */

sambaRouter.route('/obtener-datos-samba').get(getSambaData)
sambaRouter.route('/insertar-datos-samba').post(insertData)
sambaRouter.route('/eliminar-samba/:id').delete(deleteSamba)
sambaRouter.route('/actualizar-samba/:id').put(updateSamba)

/* RUTAS PARA ESCUELA SAMBA */

escuelaSambaRouter.route('/insertar-datos-escuela-samba').post(insertEscuelaSamba)
escuelaSambaRouter.route('/obtener-datos-escuela-samba').get(getEscuelaSambalData)
escuelaSambaRouter.route('/eliminar-escuela-samba/:id').delete(deleteEscuelaSamba)
escuelaSambaRouter.route('/actualizar-escuela-samba/:id').put(updateEscuelaSamba)
escuelaSambaRouter.route('/obtener-nombre-escuelas').get(getNombreEscuelas)

/* RUTAS PARA INTEGRANTE ESCUELA */

integranteEscuelaSambaRouter.route('/insertar-datos-integrante-escuela-samba').post(insertDataIntegranteEscuelaSamba)
integranteEscuelaSambaRouter.route('/obtener-datos-integrante-escuela-samba').get(getIntegranteEscuelaData)
integranteEscuelaSambaRouter.route('/obtener-estudiantes-integrante-escuela').get(getNombreEstudiantes)
integranteEscuelaSambaRouter.route('/eliminar-integrante-escuela-samba/:id').delete(deleteIntegranteEscuelaSamba)
integranteEscuelaSambaRouter.route('/actualizar-integrante-escuela-samba/:id').put(updateIntegranteEscuelaSamba)

/* RUTAS PARA PATROCINADOR JURIDICO */

patrocinadorJuridicoRouter.route('/obtener-datos-patrocinador-juridico').get(getPatrocinadorJuridicoData)
patrocinadorJuridicoRouter.route('/insertar-datos-patrocinador-juridico').post(insertDataPatrocinadorJuridico)
patrocinadorJuridicoRouter.route('/eliminar-patrocinador-juridico/:id').delete(deletePatrocinadorJuridico)
patrocinadorJuridicoRouter.route('/actualizar-patrocinador-juridico/:id').put(updatePatrocinadorJuridico)
patrocinadorJuridicoRouter.route('/obtener-nombre-patrocinador-juridico').get(getNombreDeEmpresa)

/* RUTAS PARA PATROCINADOR NATURAL */

patrocinadorNaturalRouter.route('/obtener-datos-patrocinador-natural').get(getPatrocinadorNaturalData)
patrocinadorNaturalRouter.route('/insertar-datos-patrocinador-natural').post(insertDataPatrocinadorNatural)
patrocinadorNaturalRouter.route('/eliminar-patrocinador-natural/:id').delete(deletePatrocinadorNatural);
patrocinadorNaturalRouter.route('/actualizar-patrocinador-natural/:id').put(updatePatrocinadorNatural)
patrocinadorNaturalRouter.route('/obtener-nombre-personas-naturales').get(getNatural)

export default [sambaRouter, escuelaSambaRouter, integranteEscuelaSambaRouter, patrocinadorJuridicoRouter,
     patrocinadorNaturalRouter, habilidadRouter, colorRouter, rolRouter,
      lugarRouter, premioEspecialRouter, telefonoRouter,
       histIntegranteRouter, eventoSemAnualRouter, histPatrocinadorRouter, 
       patrocinadorDonacionRouter, histTituloEscuelaRouter, organizacionCarnavalRouter, ganadorRouter,
     autoresRouter, habilidadIntegranteRoute, parentescoRouter, coloresEscuelasRouter]