import { useState, useEffect } from "react";
import MyForm from "../MyForm/MyForm";
import Table from "../Table/Table";
import {
  getIntegranteEscuelaData,
  deleteIntegranteEscuelaData,
  /* Habilidades */
  getHabilidades,
  deleteHabilidades,
  /* Colores */
  getColores,
  deleteColor,
  /* Samba */
  getSambas,
  deleteSamba,
  /* Roles */
  getRoles,
  deleteRol,
  /* Patrocinadores Naturales */
  getPatrocinadoresNaturales,
  deletePatrocinadoresNaturales,
  /* Patrocinadores Juridicos */
  getPatrocinadoresJuridicos,
  deletePatrocinadoresJuridicos,
  /* Premios Especiales */
  getPremiosEspeciales,
  deletePremioEspecial,
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
  registrarLugar
} from "../../api/api";
import "./style.css";
import React from "react";
import Modal from "@mui/material/Modal";

export default function Form() {
  const [data, setData]: any = useState([]);
  const [idModify, setIdModify]: any = useState(0);
  const [open, setOpen] = React.useState(false);
  const [updateData, setUpdateData] = useState(false);
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
    if (currentTable === "Premios Especiales") {
      await deletePremioEspecial(id)
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Roles") {
      await deleteRol(id)
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Samba") {
      await deleteSamba(id)
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Habilidades") {
      await deleteHabilidades(id);
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Colores") {
      await deleteColor(id)
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Integrantes de Escuelas") {
      await deleteIntegranteEscuelaData(id);
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Escuelas de Samba") {
      await deleteEscuelaSamba(id);
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Patrocinadores Naturales") {
      await deletePatrocinadoresNaturales(id);
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
    if (currentTable === "Patrocinadores Juridicos") {
      await deletePatrocinadoresJuridicos(id);
      console.log("Dato eliminado de manera exitosa");
      setUpdateData(true)
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (currentTable === "Integrantes de Escuelas") {
        await getIntegranteEscuelaData().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Habilidades") {
        await getHabilidades().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Colores") {
        await getColores().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Samba") {
        await getSambas().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Roles") {
        await getRoles().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Patrocinadores Naturales") {
        await getPatrocinadoresNaturales().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Patrocinadores Juridicos") {
        await getPatrocinadoresJuridicos().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Premios Especiales") {
        await getPremiosEspeciales().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Escuelas de Samba") {
        await getEscuelaSamba().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Telefonos") {
        await getTelefonos().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Historial de Integrantes") {
        await getHistorialIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Eventos") {
        await getEventos().then((e: any) => setData(e.data));
        return;
      }
      if (currentTable === "Historial de Patrocinadores") {
        await getHistorialPatrocinadores().then((e: any) =>
          setData(e.data)
        );
        return;
      }
      if (currentTable === "Donacion de Patrocinadores") {
        await getDonacionesPatrocinadores().then((e: any) =>
          setData(e.data)
        );
        return
      }
      if (currentTable === "Historial de Titulos de las Escuelas") {
        await getTitulosEscuelas().then((e: any) =>
          setData(e.data)
        );
        return
      }
      if (currentTable === "Organizacion del Carnaval") {
        await getOrganizacionCarnaval().then((e: any) =>
          setData(e.data)
        );
        return
      }
      if (currentTable === "Ganadores") {
        await getGanadores().then((e: any) => setData(e.data));
        return
      }
      if (currentTable === "Colores de Las escuelas") {
        await getColoresEscuelas().then((e: any) =>
          setData(e.data)
        );
        return
      }
      if (currentTable === "Autores") {
        const res = await getAutores().then((e: any) => setData(e.data));
        return
      }
      if (currentTable === "Habilidades de Integrantes") {
        await getHabilidadesIntegrantes().then((e: any) =>
          setData(e.data)
        );
        return
      }
      if (currentTable === "Parentescos") {
        await getParentesco().then((e: any) => setData(e.data));
        return
      }
      if (currentTable === "Lugares") {
        await getLugares().then((e: any) => setData(e.data));
        return
      }
    };
    getData();
    setUpdateData(false)
  }, [currentTable, updateData === true]);

  return (
    <div>
      <MyForm currentTable={currentTable} setUpdate={setUpdateData}/>
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
          
        </div>
      </Modal>
    </div>
  );
}
