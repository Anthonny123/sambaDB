import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getParentesco = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVparentesco");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertParentesco = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVparentesco (nombre_parentesco, cod_integrante_escuela1, cod_integrante_escuela2)
                VALUES ($1, $2, $3)`, [request.nombre_parentesco, request.cod_integrante_escuela1, request.cod_integrante_escuela2]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteParentesco = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVparentesco WHERE cod_integrante_escuela1 = $1, cod_integrante_escuela2 = $2', [params.cie1, params.cue2]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateParentesco= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVparentesco SET nombre_parentesco = $1, cod_integrante_escuela1 = $2, cod_integrante_escuela2 = $3 WHERE cod_integrante_escuela1 = $4, cod_integrante_escuela2 = $5",[request.nombre_parentesco, request.cod_integrante_escuela1, request.cod_integrante_escuela2, params.cie1, params.cue2]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getParentesco, insertParentesco, deleteParentesco, updateParentesco}