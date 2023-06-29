import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getAutores = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVautor");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertAutores = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVautor (cod_samba, cod_integrante_escuela, cod_escuela_samba, fecha_inicio)
                VALUES ($1, $2, $3, $4)`, [request.cod_samba, request.cod_integrante_escuela, request.cod_escuela_samba, request.fecha_inicio]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteAutores = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVautor WHERE cod_samba = $1, cod_integrante_escuela = $2, cod_escuela_samba, fecha_inicio', [params.cs, params.cie, params.ces, params.fi]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateAutores= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVC_E SET cod_samba = $1, cod_integrante_escuela = $2, cod_escuela_samba = $3, fecha_inicio = $4 WHERE cod_samba = $5, cod_integrante_escuela = $6, cod_escuela_samba = $7, fecha_inicio = $8", [request.cod_samba, request.cod_integrante_escuela, request.cod_escuela_samba, request.fecha_inicio, params.cs, params.cie, params.ces, params.fi]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getAutores, insertAutores, deleteAutores, updateAutores}