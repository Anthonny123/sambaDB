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
export const getHabilidades = ()=> axios.get(`${API}/habilidad/obtener-datos-habilidades`)

/* Colores */
export const getColores = ()=> axios.get(`${API}/color/obtener-datos-colores`)

/* Samba */
export const getSambas = ()=> axios.get(`${API}/samba/obtener-datos-samba`)

/* Roles */
export const getRoles = ()=> axios.get(`${API}/rol/obtener-datos-rol`)

/* Patrocinadores Naturales */
export const getPatrocinadoresNaturales = ()=> axios.get(`${API}/patrocinador-natural/obtener-datos-patrocinador-natural`)

/*Patrocinadores Juridicos*/
export const getPatrocinadoresJuridicos = ()=> axios.get(`${API}/patrocinador-juridico/obtener-datos-patrocinador-juridico`)

/* Premios Especiales */
export const getPremiosEspeciales = ()=> axios.get(`${API}/premio-especial/obtener-datos-premio-especial`)

/* Escuelas de Samba */
export const getEscuelaSamba = ()=> axios.get(`${API}/escuela-samba/obtener-datos-escuela-samba`)

/* Telefonos */
export const getTelefonos = ()=> axios.get(`${API}/telefono/obtener-datos-telefonos`)

/* Historial de Integrantes */
export const getHistorialIntegrantes = ()=> axios.get(`${API}/historico-integrante/obtener-datos-historial-integrante`)

/* Eventos */
export const getEventos = ()=> axios.get(`${API}/evento-semanal-anual/obtener-datos-evento-sem-anual`)

/* Historial de Patrocinadores */
export const getHistorialPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador/obtener-historico-patrocinador`)

/* Donacion de Patrocinadores */
export const getDonacionesPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador-donador/obtener-patrocinador-donacion`)

/* Historial de Titulos de las Escuelas */
export const getTitulosEscuelas = ()=> axios.get(`${API}/historico-titulo-escuela/obtener-historico-titulo-escuela`)

/* Organizacion del Carnaval */
//export const getOrganizacionCarnaval = ()=> axios.get(`${API}/historico-titulo-escuela/obtener-historico-titulo-escuela`)

/* 
    "",
    "Ganadores",
    "Colores de Las escuelas",
    "Autores",
    "Habilidades de Integrantes",
    "Parentescos",
    "Lugares"
*/