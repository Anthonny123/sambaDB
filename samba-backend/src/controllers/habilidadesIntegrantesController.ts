import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getHabilidadesIntegrantes = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVI_H");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertHabilidadesIntegrantes = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVI_H (cod_integrante_escuela, cod_habilidad)
                VALUES ($1, $2)`, [request.cod_integrante_escuela, request.cod_habilidad]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteHabilidadesIntegrantes = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVI_H WHERE cod_integrante_escuela = $1, cod_habilidad = $2', [params.cie, params.hab]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateHabilidadesIntegrantes= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVI_H SET cod_integrante_escuela = $1, cod_habilidad = $2 WHERE cod_integrante_escuela = $1, cod_habilidad = $2",[request.cod_integrante_escuela, request.cod_habilidad, params.cie, params.hab]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getHabilidadesIntegrantes, insertHabilidadesIntegrantes, deleteHabilidadesIntegrantes, updateHabilidadesIntegrantes}