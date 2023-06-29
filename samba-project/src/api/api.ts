import axios from 'axios';

const API = 'http://localhost:3001'

export const registerIntegranteEscuela = (integranteEscuela:any)=> axios.post(`${API}/integrante-escuela-samba/insertar-datos-integrante-escuela-samba`, integranteEscuela)
export const getIntegranteEscuelaData = ()=> axios.get(`${API}/integrante-escuela-samba/obtener-datos-integrante-escuela-samba`)
export const deleteIntegranteEscuelaData = (id:any)=>{
    axios.delete(`${API}/integrante-escuela-samba/eliminar-integrante-escuela-samba/${id}`)
}
export const updateIntegranteEscuelaData = (data:any, id:any)=>{
    axios.put(`${API}/integrante-escuela-samba/actualizar-integrante-escuela-samba/${id}`, data)
}

/* Habilidades */
export const registrarHabilidad = (habilidad:any)=> axios.post(`${API}/habilidad/insertar-datos-habilidades`, habilidad)
export const getHabilidades = ()=> axios.get(`${API}/habilidad/obtener-datos-habilidades`)

/* Colores */
export const getColores = ()=> axios.get(`${API}/color/obtener-datos-colores`)
export const registrarColor = (color:any)=> axios.post(`${API}/color/insertar-datos-colores`, color)

/* Samba */
export const getSambas = ()=> axios.get(`${API}/samba/obtener-datos-samba`)
export const registrarSamba = (samba:any)=> axios.post(`${API}/samba/insertar-datos-samba`, samba)

/* Roles */
export const getRoles = ()=> axios.get(`${API}/rol/obtener-datos-rol`)
export const registrarRol = (rol:any)=> axios.post(`${API}/rol/insertar-datos-rol`, rol)

/* Patrocinadores Naturales */
export const getPatrocinadoresNaturales = ()=> axios.get(`${API}/patrocinador-natural/obtener-datos-patrocinador-natural`)
export const deletePatrocinadoresNaturales = (id:any)=>{
    axios.delete(`${API}/patrocinador-natural/eliminar-patrocinador-natural/${id}`)
}
/*Patrocinadores Juridicos*/
export const getPatrocinadoresJuridicos = ()=> axios.get(`${API}/patrocinador-juridico/obtener-datos-patrocinador-juridico`)
export const deletePatrocinadoresJuridicos = (id:any)=>{
    axios.delete(`${API}/patrocinador-juridico/eliminar-patrocinador-juridico/${id}`)
}

/* Premios Especiales */
export const getPremiosEspeciales = ()=> axios.get(`${API}/premio-especial/obtener-datos-premio-especial`)

/* Escuelas de Samba */
export const getEscuelaSamba = ()=> axios.get(`${API}/escuela-samba/obtener-datos-escuela-samba`)
export const deleteEscuelaSamba = (id:any)=>{
    axios.delete(`${API}/escuela-samba/eliminar-escuela-samba/${id}`)
}
/* Telefonos */
export const getTelefonos = ()=> axios.get(`${API}/telefono/obtener-datos-telefonos`)

/* Historial de Integrantes */
export const getHistorialIntegrantes = ()=> axios.get(`${API}/historico-integrante/obtener-datos-historial-integrante`)
export const deleteHistorialIntegrante = (ces:any,cie:any, fi:any )=>{
    axios.delete(`${API}/escuela-samba/eliminar-datos-historial-integrante/${ces}/${cie}/${fi}`)
}

/* Eventos */
export const getEventos = ()=> axios.get(`${API}/evento-semanal-anual/obtener-datos-evento-sem-anual`)

/* Historial de Patrocinadores */
export const getHistorialPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador/obtener-historico-patrocinador`)

/* Donacion de Patrocinadores */
export const getDonacionesPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador-donador/obtener-patrocinador-donacion`)

/* Historial de Titulos de las Escuelas */
export const getTitulosEscuelas = ()=> axios.get(`${API}/historico-titulo-escuela/obtener-historico-titulo-escuela`)

/* Organizacion del Carnaval */
export const getOrganizacionCarnaval = ()=> axios.get(`${API}/organizacion-carnaval/obtener-organizacion-carnaval`)

/* Ganadores */
export const getGanadores = ()=> axios.get(`${API}/ganador/obtener-ganador`)

/* Colores de las escuelas */
export const getColoresEscuelas = ()=> axios.get(`${API}/colores-de-escuelas/obtener-colores-de-escuela`)

/* Autores */
export const getAutores = ()=> axios.get(`${API}/autor/obtener-autores`)

/* Habilidades Integrantes */
export const getHabilidadesIntegrantes = ()=> axios.get(`${API}/habilidad-integrante/obtener-habilidades-integrantes`)

/* Parentesco */
export const getParentesco = ()=> axios.get(`${API}/parentesco/obtener-parentesco`)

/* Lugares */
export const getLugares = ()=> axios.get(`${API}/lugar/obtener-datos-lugar`)
