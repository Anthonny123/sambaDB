import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getEventoSemAnual = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVevento_sem_anual");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertEventoSemAnual = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVevento_sem_anual (nombre, descripcion, tipo, fecha_inicio, fecha_fin, asistencia, costo_unitario_reales, cod_escuela_samba)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [request.nombre, request.descripcion, request.tipo, request.fecha_inicio, request.fecha_fin, request.asistencia, request.costo_unitario_reales, request.cod_escuela_samba]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteEventoSemAnual = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVeventp_sem_anual WHERE codigo = $1, cod_escuela_samba = $2', [params.id, params.ces]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateEventoSemAnual = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVevento_sem_anual SET nombre = $1, descripcion = $2, tipo = $3, fecha_inicio = $4, fecha_fin = $5, asistencia = $6, costo_unitario_reales = $7 WHERE codigo = $8, cod_escuela_samba = $9",
    [request.nombre, request.descripcion, request.tipo, request.fecha_inicio, request.fecha_fin, request.asistencia, request.costo_unitario_reales, params.id, params.ces]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getEventoSemAnual, insertEventoSemAnual, deleteEventoSemAnual, updateEventoSemAnual}