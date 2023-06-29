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
  /* Colores */
  getColores,
  /* Samba */
  getSambas,
  /* Roles */
  getRoles,
  /* Patrocinadores Naturales */
  getPatrocinadoresNaturales,
  /* Patrocinadores Juridicos */
  getPatrocinadoresJuridicos,
  /* Premios Especiales */
  getPremiosEspeciales,
  /* Escuelas de Samba */
  getEscuelaSamba,
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
  getLugares
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
    console.log(data);
    await deleteIntegranteEscuelaData(id);
    console.log("Dato eliminado de manera exitosa");
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
        const res = await getHabilidades().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Colores") {
        const res = await getColores().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Samba") {
        const res = await getSambas().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Roles") {
        const res = await getRoles().then((e: any) =>
          setData(e.data)
        );
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
        const res = await getEscuelaSamba().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Telefonos") {
        const res = await getTelefonos().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Historial de Integrantes") {
        const res = await getHistorialIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Eventos") {
        const res = await getEventos().then((e: any) =>
          setData(e.data)
        );
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
        const res = await getGanadores().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Colores de Las escuelas") {
        const res = await getColoresEscuelas().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Autores") {
        const res = await getAutores().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Habilidades de Integrantes") {
        const res = await getHabilidadesIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Parentescos") {
        const res = await getParentesco().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
      if (currentTable === "Lugares") {
        const res = await getLugares().then((e: any) =>
          setData(e.data)
        );
        return res;
      }
    };
    getData();
  }, [, handleSubmit, currentTable]);

  return (
    <div>
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
