import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getPatrocinadorNaturalData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVpatrocinador_natural");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertDataPatrocinadorNatural = async (req: Request, res: Response) => {
  try {
    const request = req.body
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVpatrocinador_natural (documento_identidad, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, contacto_email)
    VALUES ($1, $2, $3, $4, $5, $6,  $7)`, [request.documento_identidad, request.primer_nombre, request.segundo_nombre, request.primer_apellido, request.segundo_apellido, request.fecha_nacimiento, request.contacto_email] );
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deletePatrocinadorNatural = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVpatrocinador_natural WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updatePatrocinadorNatural = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVpatrocinador_natural SET documento_identidad = $1, primer_nombre = $2, segundo_nombre = $3, primer_apellido = $4, segundo_apellido = $5, fecha_nacimiento = $6, contacto_email = $7 WHERE codigo = $8",[request.documento_identidad, request.primer_nombre, request.segundo_nombre, request.primer_apellido, request.segundo_apellido, request.fecha_nacimiento, request.contacto_email, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

const getNatural = async(req:Request, res:Response) =>{
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT codigo, primer_nombre, primer_apellido FROM MAVpatrocinador_natural");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
}

export {getPatrocinadorNaturalData, insertDataPatrocinadorNatural, deletePatrocinadorNatural, updatePatrocinadorNatural, getNatural}