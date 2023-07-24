import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getPatrocinadorJuridicoData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVpatrocinador_juridico");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertDataPatrocinadorJuridico = async (req: Request, res: Response) => {
  try {
    const request = req.body
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVpatrocinador_juridico (nombre_empresa, contacto_email, mision)
    VALUES ($1, $2, $3)`,[request.nombre_empresa, request.contacto_email, request.mision] );
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deletePatrocinadorJuridico = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVpatrocinador_juridico WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updatePatrocinadorJuridico = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVpatrocinador_juridico SET nombre_empresa = $1, contacto_email = $2, mision = $3 WHERE codigo = $4",[request.nombre_empresa, request.contacto_email, request.mision, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

const getNombreDeEmpresa = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT codigo, nombre_empresa FROM MAVpatrocinador_juridico");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

export {getPatrocinadorJuridicoData, insertDataPatrocinadorJuridico, deletePatrocinadorJuridico, updatePatrocinadorJuridico, getNombreDeEmpresa}