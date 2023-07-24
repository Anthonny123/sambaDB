import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getEscuelaSambalData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVescuela_samba");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertEscuelaSamba = async (req: Request, res: Response) => {
  try {
    const request = req.body
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVescuela_samba (historia, sede, fecha_fundacion, nombre_escuela, cod_lugar)
    VALUES ($1, $2, $3, $4, $5)`, [request.historia, request.sede, request.fecha_fundacion, request.nombre_escuela, parseInt(request.cod_lugar)]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteEscuelaSamba = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVescuela_samba WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateEscuelaSamba = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVescuela_samba SET historia = $1, sede = $2, fecha_fundacion = $3, nombre_escuela = $4 WHERE codigo = $5",[request.historia, request.sede, request.fecha_fundacion, request.nombre_escuela, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

const getNombreEscuelas = async (req:Request, res:Response)=>{
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT codigo, nombre_escuela FROM MAVescuela_samba");
    const response = result.rows;
    client.release(true);
    res.status(200).json(response)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
}

export {getEscuelaSambalData, insertEscuelaSamba, deleteEscuelaSamba, updateEscuelaSamba, getNombreEscuelas}