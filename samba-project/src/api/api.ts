import axios, {AxiosError} from 'axios';

const API = 'http://localhost:3001'

export const registerIntegranteEscuela = (integranteEscuela:any)=> axios.post(`${API}/integrante-escuela-samba/insertar-datos-integrante-escuela-samba`, integranteEscuela)
export const getIntegranteEscuelaData = ()=> axios.get(`${API}/integrante-escuela-samba/obtener-datos-integrante-escuela-samba`)
export const deleteIntegranteEscuelaData = (id:any)=>{
    axios.delete(`${API}/integrante-escuela-samba/eliminar-integrante-escuela-samba/${id}`)
}
export const updateIntegranteEscuelaData = (data:any, id:any)=>{
    axios.put(`${API}/integrante-escuela-samba/actualizar-integrante-escuela-samba/${id}`, data)
}
export const getNombreApellidoEstudiantes = ()=> axios.get(`${API}/integrante-escuela-samba/obtener-estudiantes-integrante-escuela`)

/* Habilidades */
export const registrarHabilidad = (habilidad:any)=> axios.post(`${API}/habilidad/insertar-datos-habilidades`, habilidad)
export const getHabilidades = ()=> axios.get(`${API}/habilidad/obtener-datos-habilidades`)
export const deleteHabilidades = (id:any) => axios.delete(`${API}/habilidad/eliminar-datos-habilidades/${id}`)

/* Colores */
export const getColores = ()=> axios.get(`${API}/color/obtener-datos-colores`)
export const registrarColor = (color:any)=> axios.post(`${API}/color/insertar-datos-colores`, color)
export const deleteColor = (id:any) => axios.delete(`${API}/color/eliminar-datos-colores/${id}`)

/* Samba */
export const getSambas = ()=> axios.get(`${API}/samba/obtener-datos-samba`)
export const registrarSamba = (samba:any)=> axios.post(`${API}/samba/insertar-datos-samba`, samba)
export const deleteSamba = (id:any) => axios.delete(`${API}/samba/eliminar-samba/${id}`)

/* Roles */
export const getRoles = ()=> axios.get(`${API}/rol/obtener-datos-rol`)
export const registrarRol = (rol:any)=> axios.post(`${API}/rol/insertar-datos-rol`, rol)
export const deleteRol = (id:any) => axios.delete(`${API}/rol/eliminar-datos-rol/${id}`)

/* Patrocinadores Naturales */
export const getPatrocinadoresNaturales = ()=> axios.get(`${API}/patrocinador-natural/obtener-datos-patrocinador-natural`)
export const getNombresNaturales = () => axios.get(`${API}/patrocinador-natural/obtener-nombre-personas-naturales`)
export const deletePatrocinadoresNaturales = (id:any)=>{axios.delete(`${API}/patrocinador-natural/eliminar-patrocinador-natural/${id}`)}
export const registrarPatrocinadorNatural:any = (patrocinadorNatural:any)=> axios.post(`${API}/patrocinador-natural/insertar-datos-patrocinador-natural`, patrocinadorNatural)

/*Patrocinadores Juridicos*/
export const getPatrocinadoresJuridicos = ()=> axios.get(`${API}/patrocinador-juridico/obtener-datos-patrocinador-juridico`)
export const deletePatrocinadoresJuridicos = (id:any)=>{axios.delete(`${API}/patrocinador-juridico/eliminar-patrocinador-juridico/${id}`)}
export const registrarPatrocinadorJuridico= (patrocinadorJuridico:any)=> axios.post(`${API}/patrocinador-juridico/insertar-datos-patrocinador-juridico`, patrocinadorJuridico)
export const getNombreDeEmpresas = ()=>axios.get(`${API}/patrocinador-juridico/obtener-nombre-patrocinador-juridico`)

/* Premios Especiales */
export const getPremiosEspeciales = ()=> axios.get(`${API}/premio-especial/obtener-datos-premio-especial`)
export const registrarPremioEspecial = (premioEspecial:any)=> axios.post(`${API}/premio-especial/insertar-datos-premio-especial`, premioEspecial)
export const deletePremioEspecial = (id:any)=>{ axios.delete(`${API}/premio-especial/eliminar-datos-premio-especial/${id}`)}

/* Escuelas de Samba */
export const getEscuelaSamba = ()=> axios.get(`${API}/escuela-samba/obtener-datos-escuela-samba`)
export const deleteEscuelaSamba = (id:any)=>{axios.delete(`${API}/escuela-samba/eliminar-escuela-samba/${id}`)}
export const insertEscuelaSamba = (escuelaSamba:any) => {axios.post(`${API}/escuela-samba/insertar-datos-escuela-samba`, escuelaSamba)}
export const getNombreEscuelas = ()=> axios.get(`${API}/escuela-samba/obtener-nombre-escuelas`)

/* Telefonos */
export const getTelefonos = ()=> axios.get(`${API}/telefono/obtener-datos-telefonos`)
export const registrarTelefono = (telefono:any)=> axios.post(`${API}/telefono/insertar-datos-telefonos`, telefono)

/* Historial de Integrantes */
export const getHistorialIntegrantes = ()=> axios.get(`${API}/historico-integrante/obtener-datos-historial-integrante`)
export const deleteHistorialIntegrante = (ces:any,cie:any, fi:any )=>{axios.delete(`${API}/escuela-samba/eliminar-datos-historial-integrante/${ces}/${cie}/${fi}`)}
export const registrarHistorialIntegranteEscuela = (historial:any)=> axios.post(`${API}/escuela-samba/insertar-datos-historial-integrante`, historial)

/* Eventos */
export const getEventos = ()=> axios.get(`${API}/evento-semanal-anual/obtener-datos-evento-sem-anual`)
export const registrarEvento = (evento:any)=> axios.post(`${API}/evento-semanal-anual/insertar-datos-evento-sem-anual`, evento)

/* Historial de Patrocinadores */
export const getHistorialPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador/obtener-historico-patrocinador`)
export const registrarHistorialPatrocinador = (patrocinador:any) => axios.post(`${API}/historico-patrocinador/insertar-historico-patrocinador`, patrocinador)
export const getAllPartners = ()=> axios.get(`${API}/historico-patrocinador/obtener-patrocinadores`)
export const getCodeAndNameInAllPartners = ()=> axios.get(`${API}/historico-patrocinador/obtener-nombre-patrocinadores-con-codigo`)

/* Donacion de Patrocinadores */
export const getDonacionesPatrocinadores = ()=> axios.get(`${API}/historico-patrocinador-donador/obtener-patrocinador-donacion`)
export const insertDonacionesPatrocinadores = (histDonacion:any) => axios.post(`${API}/historico-patrocinador-donador/insertar-patrocinador-donacion`,histDonacion )

/* Historial de Titulos de las Escuelas */
export const getTitulosEscuelas = ()=> axios.get(`${API}/historico-titulo-escuela/obtener-historico-titulo-escuela`)


export const insertHistTitulosEscuelas = (histTitulos:any)=> axios.post(`${API}/historico-titulo-escuela/insertar-historico-titulo-escuela`, histTitulos)
/*{
    try{
        const response = axios.post(`${API}/historico-titulo-escuela/insertar-historico-titulo-escuela`, histTitulos)
        return response;
    }catch(err : any){
        throw err
    }
}*/
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
export const registrarLugar = (lugar:any)=> axios.post(`${API}/lugar/insertar-datos-lugar`, lugar)
