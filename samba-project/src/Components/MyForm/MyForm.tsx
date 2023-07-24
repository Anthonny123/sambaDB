import {useEffect, useState} from "react";
import { useAppDispatch} from "../../redux/hooks";
import {fetchIntegrantes} from '../../redux/features/integrantesSlice'
import { fetchNombreEscuelas } from "../../redux/features/escuelasSlice";
import { fetchPatrocinadores, fetchGetCodeAndNameInAllPartners } from "../../redux/features/histPatrocinadorSlice";
import { useForm } from "react-hook-form";
import data_phone from '../../data/phone_code.json'
import { useSelector } from "react-redux";
import { registrarColor, registrarHabilidad, 
    registerIntegranteEscuela, registrarSamba,
    registrarRol, registrarPatrocinadorNatural,
    registrarPatrocinadorJuridico, registrarPremioEspecial,
    insertEscuelaSamba, registrarTelefono, registrarHistorialIntegranteEscuela, registrarEvento,
    registrarHistorialPatrocinador, insertDonacionesPatrocinadores, insertHistTitulosEscuelas } from "../../api/api";
import {formatDate} from "../../tools/tools"

import Alerts, {NotificationType} from "../Alerts/Alerts"

interface myformInterface {
  currentTable: any;
  setUpdate:any
}

const MyForm = ({ currentTable, setUpdate}: myformInterface) => {
    const dispatch = useAppDispatch();
    const {integrantes, loading, error} = useSelector((state:any)=>state.integrantes)
    const {nombres_escuelas, loading_escuelas, error_escuelas} = useSelector((state:any)=> state.nombres_escuelas)
    const {patrocinadores} = useSelector((state:any) => state.patrocinadores)
    const {nameAndCodePartners} = useSelector((state:any)=> state.nameAndCodePartners)

    const [openAlert, setOpenAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [alertType, setAlertType]:any = useState('')

    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data: any) => {
        try{
            if (currentTable === "Colores") await registrarColor(data);
            if (currentTable === "Integrantes de Escuelas") await registerIntegranteEscuela(data)
            if (currentTable === "Habilidades") await registrarHabilidad(data);
            if (currentTable === "Samba") await registrarSamba(data)
            if (currentTable === "Roles") await registrarRol(data)
            if (currentTable === "Patrocinadores Naturales") await registrarPatrocinadorNatural(data)
            if (currentTable === "Patrocinadores Juridicos") await registrarPatrocinadorJuridico(data)
            if (currentTable === "Premios Especiales") await registrarPremioEspecial(data)
            if (currentTable === "Escuelas de Samba") await insertEscuelaSamba(data)
            if (currentTable === "Telefonos") await registrarTelefono(data)
            if (currentTable === "Historial de Integrantes" ) await registrarHistorialIntegranteEscuela(data)
            if (currentTable === "Eventos") await registrarEvento(data)
            if (currentTable === "Historial de Patrocinadores") await registrarHistorialPatrocinador(data)
            if (currentTable === "Donacion de Patrocinadores") await insertDonacionesPatrocinadores(data)
            if (currentTable === "Historial de Titulos de las Escuelas") await insertHistTitulosEscuelas(data);
            setAlertType("success")
            setMessageAlert("Dato registrado de manera exitosa")
            setOpenAlert(true)
            setUpdate(true)
            reset()
        }catch (error:any){
            if(error.response?.status === 409 ){
                setAlertType("error")
                setMessageAlert("Ya existe este registro")
                setOpenAlert(true)
            }else{
                setAlertType("error")
                setMessageAlert("Hemos detectado un error, recargue la pagina")
                setOpenAlert(true)
            }   
        }
    };
    const handleCloseAlert = ()=>{
        setOpenAlert(false)
    }

  useEffect(() => {
    dispatch(fetchIntegrantes())
    dispatch(fetchNombreEscuelas())
    dispatch(fetchPatrocinadores())
    dispatch(fetchGetCodeAndNameInAllPartners())
    reset()
  }, [dispatch, currentTable]);


  return (
    <>
    <Alerts type={alertType} message={messageAlert} isOpen={openAlert} handleClose={handleCloseAlert}></Alerts>
    <form className="initial-form" onSubmit={handleSubmit(onSubmit)}>
      {currentTable === "Colores" ? 
        <>
          <input
            type="text"
            {...register("nombre_color", { required: true })}
            placeholder="Nombre del Color"
          />
          {errors.nombre_color && <span>Este campo es requerido</span>}
        </>
        : currentTable === "Habilidades" ?
        <>
          <input
            type="text"
            {...register("nombre_habilidad", { required: true })}
            placeholder="Nombre Habilidad"
          />
          {errors.nombre_habilidad && <span>Este campo es requerido</span>}
          <input
            type="text"
            {...register("descripcion")}
            placeholder="Descripcion"
          />
        </>
        : currentTable === "Integrantes de Escuelas" ? 
        <>
            <input
                type="text"
                {...register("primer_nombre", { required: true })}
                placeholder="Primer nombre"
            />
            {errors.primer_nombre && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("segundo_nombre")}
                placeholder="Segundo Nombre"
            />
            <input
                type="text"
                {...register("primer_apellido", { required: true })}
                placeholder="Primer Apellido"
            />
            {errors.primer_apellido && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("segundo_apellido")}
                placeholder="Segundo Apellido"
            />
            {errors.segundo_apellido && <span>Este campo es requerido</span>}
            <input
                type="number"
                {...register("documento_identidad", { required: true })}
                placeholder="Documento de Identidad"
            />
            {errors.documento_identidad && <span>Este campo es requerido</span>}
            <input type="text" {...register("apodo")} placeholder="Apodo" />
            <input
                type="date"
                {...register("fecha_nacimiento", { required: true })}
                placeholder="Fecha de nacimiento"
            />
            {errors.fecha_nacimiento && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("nacionalidad", { required: true })}
                placeholder="Nacionalidad"
            />
        </>
        : currentTable === "Samba" ?
        <>
            <input
                type="text"
                {...register("letra", { required: true })}
                placeholder="Letra de la cancion"
            />
            {errors.letra && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("nombre_cancion", { required: true })}
                placeholder="Nombre de la cancion"
            />
            {errors.nombre_cancion && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("year_carnaval", { required: true })}
                placeholder="Año del Carnaval"
            />
            {errors.year_carnaval && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("tipo", { required: true })}
                placeholder="Tipo de Samba"
            />
            {errors.tipo && <span>Este campo es requerido</span>}
        </> 
        : currentTable === "Roles" ?
        <>
            <input
                type="text"
                {...register("nombre_rol", { required: true })}
                placeholder="Nombre del Rol"
            />
            {errors.nombre_rol && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("descripcion", { required: true })}
                placeholder="Descripcion del Rol"
            />
            {errors.descripcion && <span>Este campo es requerido</span>}
        </>
        : currentTable === "Patrocinadores Naturales" ?
        <>
            <input
                type="text"
                {...register("documento_identidad", { required: true })}
                placeholder="Documento de Identidad"
            />
            {errors.documento_identidad && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("primer_nombre", { required: true })}
                placeholder="Primer Nombre"
            />
            {errors.primer_nombre && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("segundo_nombre")}
                placeholder="Segundo Nombre"
            />
            <input
                type="text"
                {...register("primer_apellido", { required: true })}
                placeholder="Primer Apellido"
            />
            {errors.primer_apellido && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("segundo_apellido")}
                placeholder="Segundo Apellido"
            />
            <input
                type="date"
                {...register("fecha_nacimiento", { required: true })}
                placeholder="Fecha de Nacimiento"
            />
            {errors.fecha_nacimiento && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("contacto_email", { required: true })}
                placeholder="Contacto email"
            />
            {errors.contacto_email && <span>Este campo es requerido</span>}
        </>
        : currentTable === "Patrocinadores Juridicos" ?
        <>
            <input
                type="text"
                {...register("nombre_empresa", { required: true })}
                placeholder="Nombre de la Empresa"
            />
            {errors.nombre_empresa && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("contacto_email", { required: true })}
                placeholder="Contacto de email"
            />
            {errors.contacto_email && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("mision")}
                placeholder="Mision"
            />
        </>
        :currentTable === "Premios Especiales" ?
        <>
            <input
                type="text"
                {...register("nombre", { required: true })}
                placeholder="Nombre del Premio"
            />
            {errors.nombre && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("tipo", { required: true })}
                placeholder="Tipo de Premio"
            />
            {errors.tipo && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("descripcion", { required: true })}
                placeholder="Descripcion"
            />
            {errors.descripcion && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("cod_lugar", { required: true })}
                placeholder="Codigo del Lugar"
            />
            {errors.cod_lugar && <span>Este campo es requerido</span>}
        </>
        : currentTable === "Escuelas de Samba" ?
        <>
            <input
                type="text"
                {...register("historia", { required: true })}
                placeholder="Historia"
            />
            {errors.historia && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("sede", { required: true })}
                placeholder="Sede"
            />
            {errors.sede && <span>Este campo es requerido</span>}
            <input
                type="date"
                {...register("fecha_fundacion", { required: true })}
                placeholder="Fecha de Fundacion"
            />
            {errors.fecha_fundacion && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("nombre_escuela", { required: true })}
                placeholder="Nombre de la escuela"
            />
            {errors.nombre_escuela && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("cod_lugar", { required: true })}
                placeholder="Codigo del Lugar"
            />
            {errors.cod_lugar && <span>Este campo es requerido</span>}
        </>
        :currentTable === "Telefonos" ? 
        <>
            <select {...register("codigo_internacional")}>
                {data_phone.map((data:any)=> data['phone_code'] !=='' && <option value={parseInt(data['phone_code'])}>{ `${data['nombre']} - ${data['phone_code']}`}</option>)}
            </select>
            {errors.codigo_internacional && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("codigo_area", { required: true })}
                placeholder="Codigo del Area"
            />
            {errors.codigo_area && <span>Este campo es requerido</span>}
            <input
                type="text"
                {...register("numero_telefono", { required: true })}
                placeholder="Numero del telefono"
            />
            {errors.numero_telefono && <span>Este campo es requerido</span>}
        </>
        :currentTable === "Historial de Integrantes" ? 
        <>
            <input
            type="date"
            {...register("fecha_inicio", { required: true })}
            placeholder="Fecha de Inicio"
          />
          {errors.fecha_inicio && <span>Este campo es requerido</span>}
          <input
            type="date"
            {...register("fecha_fin")}
            placeholder="Fecha Final"
          />
          <select {...register("autoridad", {required:true}) }>
            <option value={'Si'}>Si</option>
            <option value={'No'}>No</option>
          </select>
          {errors.autoridad && <span>Este campo es requerido</span>}
          <select {...register("cod_escuela_samba", {required:true})}>
            {nombres_escuelas.map((data:any)=> <option value={data['codigo']}>{`${data['nombre_escuela']}`}</option>)}
          </select>
          {errors.cod_escuela_samba && <span>Debes seleccionar una escuela</span>}
          <select {...register("cod_integrante_escuela", {required:true})}>
            {integrantes.map((data:any)=> <option value={data['codigo']}>{`${data['primer_nombre']} ${data['primer_apellido']}`}</option>)}
          </select>
          {errors.cod_integrante_escuela && <span>Debes seleccionar un integrante</span>}
        </>
        :currentTable === "Eventos" ? 
        <>
            <input
                type = "text"
                {...register("nombre", {required:true})}
                placeholder="Nombre"
            />
            <input
                type = "text"
                {...register("descripcion", {required:true})}
                placeholder="Descripcion"
            />
            <select {...register("tipo", {required:true})}>
                <option value={'Noche de Samba'}>Noche de Samba</option>
                <option value={'Otro'}>Otro</option>
            </select>
            <input type="date" {...register("fecha_inicio", {required:true})} placeholder="Fecha de Inicio"/>
            <input type="date" {...register("fecha_fin", {required:true})} placeholder="Fecha Final"/>
            <input
                type = "number"
                {...register("asistencia")}
                placeholder="Asistencia"
            />
            <input
                type = "number"
                {...register("costo_unitario_reales", {required:true})}
                placeholder="Costo Unitario"
            />
            <select {...register("cod_escuela_samba", {required:true})}>
                {nombres_escuelas.map((data:any)=> <option value={data['codigo']}>{`${data['nombre_escuela']}`}</option>)}
            </select>

        </>
        : currentTable === "Historial de Patrocinadores" ?
        <>
            <input type="date" {...register("fecha_inicio", {required:true})} placeholder="Fecha de Inicio"/>
            <input type="date" {...register("fecha_fin")} placeholder="Fecha Final"/>  
            <select {...register("cod_escuela_samba", {required:true})}>
                {nombres_escuelas.map((data:any)=> <option value={data['codigo']}>{`${data['nombre_escuela']}`}</option>)}
            </select>
            <select {...register("cod_patrocinador", {required:true})}>
                {patrocinadores.map((data:any)=> <option value={`${data['codigo']} ${data['tipo']}`}>{`${data['nombre']}`}</option>)}
            </select>
        </>
        : currentTable === "Donacion de Patrocinadores" ? 
        <>
           <input type="number" {...register("monto_reales")}  /> 
           <input type="date" {...register("fecha_donacion")} />
           <select {...register("cod_escuela_samba")}>
                {nombres_escuelas.map((data:any)=> <option value={data['codigo']}>{`${data['nombre_escuela']}`}</option>)}
           </select>
           <select {...register("cod_hist_patrocinador")}>
                {nameAndCodePartners.map((data:any)=> <option value={data['codigo_historial']}>{`${data['nombre_patrocinador']} (${formatDate(data['fecha_inicio'])})`}</option>)}
           </select>
        </>
        : currentTable === "Historial de Titulos de las Escuelas" ? 
        <>
            <input type="date" {...register("ano")} />
            <input type="text" {...register("grupo")} />
            <input type="number" {...register("monto_ganado_reales")} />
            <select {...register("cod_escuela_samba")}>
                {nombres_escuelas.map((data:any)=> <option value={data['codigo']}>{`${data['nombre_escuela']}`}</option>)}
            </select>

        </>
        : ""
      }

      <input type="submit" value="Registrar" />
    </form>
    </>
  );
};

export default MyForm;
