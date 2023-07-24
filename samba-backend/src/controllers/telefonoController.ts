import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getTelefonos = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVtelefono");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertTelefono = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVtelefono (codigo_internacional, codigo_area, numero_telefono)
                VALUES ($1, $2, $3)`, [request.codigo_internacional, parseInt(request.codigo_area), parseInt(request.numero_telefono)]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteTelefono = async(req:Request, res:Response)=>{
  try{
    const nt = req.params.nt
    const client = await pool.connect();
    await client.query('DELETE FROM MAVtelefono WHERE numero_telefono = $1', [nt]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateTelefono = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVtelefono SET codigo_internacional = $1, codigo_area = $2, numero_telefono = 3$ WHERE codigo_internacional = $4 AND codigo_area = $5 AND numero_telefono = $6 ",[request.codigo_internacional, request.codigo_area, request.numero_telefono, params.ci, params.ca, params.nt]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getTelefonos, insertTelefono, deleteTelefono, updateTelefono}