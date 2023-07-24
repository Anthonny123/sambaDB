import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getIntegranteEscuelaData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVintegrante_escuela");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertDataIntegranteEscuelaSamba = async (req: Request, res: Response) => {
  try {
    const request = req.body
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVintegrante_escuela (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, documento_identidad, apodo, fecha_nacimiento, nacionalidad)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [request.primer_nombre, request.segundo_nombre, request.primer_apellido, request.segundo_apellido, request.documento_identidad, request.apodo, request.fecha_nacimiento, request.nacionalidad]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteIntegranteEscuelaSamba = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVintegrante_escuela WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateIntegranteEscuelaSamba = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVintegrante_escuela SET primer_nombre = $1, segundo_nombre = $2, primer_apellido = $3, segundo_apellido = $4, documento_identidad = $5, apodo = $6, fecha_nacimiento = $7, nacionalidad = $8  WHERE codigo = $9",[request.primer_nombre, request.segundo_nombre, request.primer_apellido, request.segundo_apellido, request.documento_identidad, request.apodo, request.fecha_nacimiento, request.nacionalidad, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

const getNombreEstudiantes = async(req:Request, res: Response)=>{
  try{
    const client = await pool.connect();
    const result = await client.query("SELECT primer_nombre, primer_apellido, codigo FROM MAVintegrante_escuela");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  }catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
}

export {insertDataIntegranteEscuelaSamba, getIntegranteEscuelaData, deleteIntegranteEscuelaSamba, updateIntegranteEscuelaSamba, getNombreEstudiantes}