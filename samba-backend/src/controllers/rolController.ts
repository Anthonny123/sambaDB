import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getRol = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVrol");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertRol = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVrol (nombre_rol, descripcion)
                VALUES ($1, $2)`, [request.nombre_rol, request.descripcion]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteRol = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVrol WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateRol = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVrol SET nombre_rol = $1, descripcion = $2 WHERE codigo = $3",[request.nombre_rol, request.descripcion, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getRol, deleteRol, insertRol, updateRol}