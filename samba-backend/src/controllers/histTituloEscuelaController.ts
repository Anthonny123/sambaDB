import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getHistTituloEscuela = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVhist_titulo_escuela");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertHistTituloEscuela = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVhist_titulo_escuela (ano, grupo, monto_ganado_reales, cod_escuela_samba)
                VALUES ($1, $2, $3, $4)`, [parseInt(request.ano.split('-')[0]), request.grupo, parseInt(request.monto_ganado_reales), request.cod_escuela_samba]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err:any) {
    if(err.message === "llave duplicada viola restricción de unicidad «pk_hist_titulo_escuela»"){
      res.status(409).json({ error: "Ya existe este registro" });
    }else{
      res.status(500).json({ error: err.message });
    }
  }
};

const deleteHistTituloEscuela = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVhist_titulo_escuela WHERE ano = $1, cod_escuela_samba = $2', [params.id, params.ces]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateHistTituloEscuela = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVhist_titulo_escuela SET ano = $1, grupo = $2, monto_ganado_reales = $3, cod_escuela_samba = $4 WHERE cod_escuela_samba = $5, ano = $6",[request.ano, request.grupo, request.monto_ganado_reales, request.cod_escuela_samba, params.ces, params.ano]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getHistTituloEscuela, insertHistTituloEscuela, deleteHistTituloEscuela, updateHistTituloEscuela}