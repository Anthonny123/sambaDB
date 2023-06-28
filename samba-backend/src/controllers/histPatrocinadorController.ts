import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getHistPatrocinador = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVhist_patrocinador");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertHistPatrocinador = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVhist_patrocinador (fecha_inicio, fecha_fin, cod_escuela_samba, cod_patrocinador_j, cod_patrocinador_n)
                VALUES ($1, $2, $3, $4, $5)`, [request.fecha_inicio, request.fecha_fin, request.cod_escuela_samba, request.cod_patrocinador_j, request.patrocinador_n]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteHistPatrocinador = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVhist_patrocinador WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateHistPatrocinador = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVhist_patrocinador SET fecha_inicio = $1, fecha_fin = $2, cod_escuela_samba = $3, cod_patrocinador_j = $4, cod_patrocinador_n = $5 WHERE codigo = $6",[request.fecha_inicio, request.fecha_fin, request.cod_escuela_samba, request.cod_patrocinador_j, request.cod_patrocinador_n, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getHistPatrocinador, deleteHistPatrocinador, insertHistPatrocinador, updateHistPatrocinador}