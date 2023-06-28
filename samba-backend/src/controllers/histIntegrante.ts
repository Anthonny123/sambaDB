import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getHistIntegrante = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVhist_integrante");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertHistIntegrante = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVhist_integrante (fecha_inicio, fecha_fin, autoridad, cod_escuela_samba, cod_integrante_escuela)
                VALUES ($1, $2, $3, $4, $5)`, [request.fecha_inicio, request.fecha_fin, request.autoridad, request.cod_escuela_samba, request.cod_integrante_escuela]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteHistIntegrante = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVhistIntegrante WHERE cod_escuela_samba = $1, cod_integrante_escuela = $2, fecha_inicio = $3', [params.ces, params.cie, params.fi]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateHistIntegrante = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVhist_integrante SET fecha_inicio = $1, fecha_fin = $2, autoridad = $3 WHERE cod_escuela_samba = $4, cod_integrante_escuela = $5",[request.fecha_inicio, request.fecha_fin, request.autoridad, params.ces, params.cie]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getHistIntegrante, insertHistIntegrante, deleteHistIntegrante, updateHistIntegrante}