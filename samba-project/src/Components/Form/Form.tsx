import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Table from "../Table/Table";
import {
  registerIntegranteEscuela,
  getIntegranteEscuelaData,
  deleteIntegranteEscuelaData,
  updateIntegranteEscuelaData,
  /* Habilidades */
  getHabilidades,
  registrarHabilidad,
  /* Colores */
  getColores,
  registrarColor,
  /* Samba */
  getSambas,
  registrarSamba,
  /* Roles */
  getRoles,
  registrarRol,
  /* Patrocinadores Naturales */
  getPatrocinadoresNaturales,
  deletePatrocinadoresNaturales,
  /* Patrocinadores Juridicos */
  getPatrocinadoresJuridicos,
  deletePatrocinadoresJuridicos,
  /* Premios Especiales */
  getPremiosEspeciales,
  /* Escuelas de Samba */
  getEscuelaSamba,
  deleteEscuelaSamba,
  /* Telefonos */
  getTelefonos,
  /* Historial Patrocinadores */
  getHistorialPatrocinadores,
  /* Eventos */
  getEventos,
  /* Historial Integrantes */
  getHistorialIntegrantes,
  /* Donacion Patrocinadores */
  getDonacionesPatrocinadores,
  /* Historial de Titulos de las escuelas */
  getTitulosEscuelas,
  /* Organizacion del Carnaval */
  getOrganizacionCarnaval,
  /* Ganadores */
  getGanadores,
  /* Colores de las Escuelas */
  getColoresEscuelas,
  /* Autores */
  getAutores,
  /* Habilidades Integrantes */
  getHabilidadesIntegrantes,
  /* Parentesco */
  getParentesco,
  /* Lugares */
  getLugares,
} from "../../api/api";
import "./style.css";
import React from "react";
import Modal from "@mui/material/Modal";

export default function Form() {
  const [data, setData]: any = useState([]);
  const [idModify, setIdModify]: any = useState(0);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentTable, setCurrentTable]: any = useState(
    "Integrantes de Escuelas"
  );
  const table: any = [
    "Habilidades",
    "Integrantes de Escuelas",
    "Colores",
    "Samba",
    "Roles",
    "Patrocinadores Naturales",
    "Patrocinadores Juridicos",
    "Premios Especiales",
    "Escuelas de Samba",
    "Telefonos",
    "Historial de Integrantes",
    "Eventos",
    "Historial de Patrocinadores",
    "Donacion de Patrocinadores",
    "Historial de Titulos de las Escuelas",
    "Organizacion del Carnaval",
    "Ganadores",
    "Colores de Las escuelas",
    "Autores",
    "Habilidades de Integrantes",
    "Parentescos",
    "Lugares",
  ];

  const deleteData = async (id: any) => {
    if (currentTable === "Integrantes de Escuelas") {
      console.log(data);
      await deleteIntegranteEscuelaData(id);
      console.log("Dato eliminado de manera exitosa");
    }
    if (currentTable === "Escuelas de Samba") {
      console.log(data);
      await deleteEscuelaSamba(id);
      console.log("Dato eliminado de manera exitosa");
    }
    if (currentTable === "Patrocinadores Naturales") {
      console.log(data);
      await deletePatrocinadoresNaturales(id);
      console.log("Dato eliminado de manera exitosa");
    }
    if (currentTable === "Patrocinadores Juridicos") {
      console.log(data);
      await deletePatrocinadoresJuridicos(id);
      console.log("Dato eliminado de manera exitosa");
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (currentTable === "Integrantes de Escuelas") {
        const res = await getIntegranteEscuelaData().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Habilidades") {
        const res = await getHabilidades().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Colores") {
        const res = await getColores().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Samba") {
        const res = await getSambas().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Roles") {
        const res = await getRoles().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Patrocinadores Naturales") {
        const res = await getPatrocinadoresNaturales().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Patrocinadores Juridicos") {
        const res = await getPatrocinadoresJuridicos().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Premios Especiales") {
        const res = await getPremiosEspeciales().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Escuelas de Samba") {
        const res = await getEscuelaSamba().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Telefonos") {
        const res = await getTelefonos().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Historial de Integrantes") {
        const res = await getHistorialIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Eventos") {
        const res = await getEventos().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Historial de Patrocinadores") {
        const res = await getHistorialPatrocinadores().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Donacion de Patrocinadores") {
        const res = await getDonacionesPatrocinadores().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Historial de Titulos de las Escuelas") {
        const res = await getTitulosEscuelas().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Organizacion del Carnaval") {
        const res = await getOrganizacionCarnaval().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Ganadores") {
        const res = await getGanadores().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Colores de Las escuelas") {
        const res = await getColoresEscuelas().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Autores") {
        const res = await getAutores().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Habilidades de Integrantes") {
        const res = await getHabilidadesIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Parentescos") {
        const res = await getParentesco().then((e: any) => setData(e.data));
        return res;
      }
      if (currentTable === "Lugares") {
        const res = await getLugares().then((e: any) => setData(e.data));
        return res;
      }
    };
    getData();
  }, [, handleSubmit, currentTable]);

  return (
    <div>
      {currentTable === "Integrantes de Escuelas" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("primer_nombre", { required: true })}
            placeholder="Primer nombre"
          />
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
          <input
            type="text"
            {...register("segundo_apellido")}
            placeholder="Segundo Apellido"
          />
          <input
            type="number"
            {...register("documento_identidad", { required: true })}
            placeholder="Documento de Identidad"
          />
          <input type="text" {...register("apodo")} placeholder="Apodo" />
          <input
            type="date"
            {...register("fecha_nacimiento", { required: true })}
            placeholder="Fecha de nacimiento"
          />
          <input
            type="text"
            {...register("nacionalidad", { required: true })}
            placeholder="Nacionalidad"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Habilidades" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registrarHabilidad(values);
          })}
        >
          <input
            type="text"
            {...register("nombre_habilidad", { required: true })}
            placeholder="Nombre Habilidad"
          />
          <input
            type="text"
            {...register("descripcion")}
            placeholder="Descripcion"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Colores" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registrarColor(values);
          })}
        >
          <input
            type="text"
            {...register("nombre_color", { required: true })}
            placeholder="Nombre del Color"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Samba" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registrarSamba(values);
          })}
        >
          <input
            type="text"
            {...register("letra", { required: true })}
            placeholder="Letra de la cancion"
          />
          <input
            type="text"
            {...register("nombre_cancion", { required: true })}
            placeholder="Nombre de la cancion"
          />
          <input
            type="text"
            {...register("year_carnaval", { required: true })}
            placeholder="Año del Carnaval"
          />
          <input
            type="text"
            {...register("tipo", { required: true })}
            placeholder="Tipo de Samba"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Roles" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("nombre_rol", { required: true })}
            placeholder="Nombre del Rol"
          />
          <input
            type="text"
            {...register("descripcion", { required: true })}
            placeholder="Descripcion del Rol"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Patrocinadores Naturales" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registrarRol(values);
          })}
        >
          <input
            type="text"
            {...register("documento_identidad", { required: true })}
            placeholder="Documento de Identidad"
          />
          <input
            type="text"
            {...register("primer_nombre", { required: true })}
            placeholder="Primer Nombre"
          />
          <input
            type="text"
            {...register("segundo_nombre", { required: true })}
            placeholder="Segundo Nombre"
          />
          <input
            type="text"
            {...register("primer_apellido", { required: true })}
            placeholder="Primer Apellido"
          />
          <input
            type="text"
            {...register("segundo_apellido", { required: true })}
            placeholder="Segundo Apellido"
          />
          <input
            type="date"
            {...register("fecha_nacimiento", { required: true })}
            placeholder="Fecha de Nacimiento"
          />
          <input
            type="text"
            {...register("contacto_email", { required: true })}
            placeholder="Contacto email"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Patrocinadores Juridicos" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("nombre_empresa", { required: true })}
            placeholder="Nombre de la Empresa"
          />
          <input
            type="text"
            {...register("contacto_email", { required: true })}
            placeholder="Contacto de email"
          />
          <input
            type="text"
            {...register("mision", { required: true })}
            placeholder="Mision"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Lugares" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Nombre del lugar"
          />
          <input
            type="text"
            {...register("tipo", { required: true })}
            placeholder="Tipo de Ciudad"
          />
          <input
            type="text"
            {...register("region", { required: true })}
            placeholder="Region"
          />
          <input
            type="text"
            {...register("cod_lugar_padre", { required: true })}
            placeholder="Codigo del padre"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Premios Especiales" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Nombre del Premio"
          />
          <input
            type="text"
            {...register("tipo", { required: true })}
            placeholder="Tipo de Premio"
          />
          <input
            type="text"
            {...register("descripcion", { required: true })}
            placeholder="Descripcion"
          />
          <input
            type="text"
            {...register("cod_lugar", { required: true })}
            placeholder="Codigo del Lugar"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Escuelas de Samba" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("historia", { required: true })}
            placeholder="Historia"
          />
          <input
            type="text"
            {...register("sede", { required: true })}
            placeholder="Sede"
          />
          <input
            type="date"
            {...register("fecha_fundacion", { required: true })}
            placeholder="Fecha de Fundacion"
          />
          <input
            type="text"
            {...register("nombre_escuela", { required: true })}
            placeholder="Nombre de la escuela"
          />
          <input
            type="text"
            {...register("cod_lugar", { required: true })}
            placeholder="Codigo del Lugar"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Telefonos" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="text"
            {...register("codigo_internacional", { required: true })}
            placeholder="Codigo internacional"
          />
          <input
            type="text"
            {...register("codigo_area", { required: true })}
            placeholder="Codigo del Area"
          />
          <input
            type="text"
            {...register("numero_telefono", { required: true })}
            placeholder="Numeor del telefono"
          />
          <input
            type="text"
            {...register("cod_escuela_samba", { required: true })}
            placeholder="Codigo de la escuela de Samba"
          />
          <input
            type="text"
            {...register("cod_patrocinador_j", { required: true })}
            placeholder="Codigo del patrocinador Juridico"
          />
          <input
            type="text"
            {...register("cod_patrocinador_n", { required: true })}
            placeholder="Codigo del patrocinador Natural"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : currentTable === "Historial de Integrantes" ? (
        <form
          className="initial-form"
          onSubmit={handleSubmit(async (values) => {
            const res = await registerIntegranteEscuela(values);
          })}
        >
          <input
            type="date"
            {...register("fecha_inicio", { required: true })}
            placeholder="Fecha de Inicio"
          />
          <input
            type="date"
            {...register("fecha_fin", { required: true })}
            placeholder="Fecha Final"
          />
          <input
            type="text"
            {...register("autoridad", { required: true })}
            placeholder="Autoridad"
          />
          <input
            type="text"
            {...register("cod_escuela_samba", { required: true })}
            placeholder="Codigo de la escuela de Samba"
          />
          <input
            type="text"
            {...register("cod_integrante_escuela", { required: true })}
            placeholder="Codigo del Integrante de la escuela"
          />
          <input type="submit" value="Registrar" />
        </form>
      ) : (
        ""
      )}

      <select
        name="tabla"
        value={currentTable}
        onChange={(e) => setCurrentTable(e.target.value)}
      >
        {table.map((e: any) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <Table
        data={data}
        deleteData={deleteData}
        handleOpen={handleOpen}
        setIdModify={setIdModify}
        currentTable={currentTable}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <form
            onSubmit={handleSubmit(async (values) => {
              const res = await updateIntegranteEscuelaData(values, idModify);
            })}
          >
            <input
              type="text"
              {...register("primer_nombre", { required: true })}
              placeholder="Primer nombre"
            />
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
            <input
              type="text"
              {...register("segundo_apellido")}
              placeholder="Segundo Apellido"
            />
            <input
              type="number"
              {...register("documento_identidad", { required: true })}
              placeholder="Documento de Identidad"
            />
            <input type="text" {...register("apodo")} placeholder="Apodo" />
            <input
              type="date"
              {...register("fecha_nacimiento", { required: true })}
              placeholder="Fecha de nacimiento"
            />
            <input
              type="text"
              {...register("nacionalidad", { required: true })}
              placeholder="Nacionalidad"
            />
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </Modal>
    </div>
  );
}
