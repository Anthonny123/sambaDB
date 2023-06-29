import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getGanador = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * MAVganador");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertGanador= async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVganador (ano, cod_premio_especial, fecha_inicio, cod_escuela_samba_int, cod_integrante_escuela, cod_escuela_samba)
                VALUES ($1, $2, $3, $4, $5, $6)`, [request.ano, request.cod_premio_especial, request.fecha_inicio, request.cod_escuela_samba_int, request.cod_integrante_escuela, request.cod_escuela_samba]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteGanador = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const request = req.body
    const client = await pool.connect();
    await client.query('DELETE FROM MAVganador WHERE cod_premio_especial = $1, ano = $2', [params.cpe, params.ano]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateGanador= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVganador SET ano = $1, cod_premio_especial = $2, fecha_inicio = $3, cod_escuela_samba_int = $4, cod_integrante_escuela = $5, cod_escuela_samba = $6 WHERE cod_premio_especial = $7, ano = $8",[request.ano, request.cod_premio_especial, request.fecha_inicio, request.cod_escuela_samba_int, request.cod_integrante_escuela, request.cod_escuela_samba, params.cpe, params.ano]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getGanador, insertGanador, deleteGanador, updateGanador}