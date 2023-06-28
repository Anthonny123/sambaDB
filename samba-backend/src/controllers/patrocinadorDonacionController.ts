import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getPatrocinadorDonacion = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVpatrocinador_donacion");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertPatrocinadorDonacion = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVpatrocinador_donacion (monto_reales, fecha_donacion, cod_escuela_samba, cod_hist_patrocinador)
                VALUES ($1, $2, $3, $4)`, [request.monto_reales, request.fecha_donacion, request.cod_escuela_samba, request.cod_hist_patrocinador]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deletePatrocinadorDonacion = async(req:Request, res:Response)=>{
  try{
    const id = req.params.id
    const client = await pool.connect();
    await client.query('DELETE FROM MAVpatrocinador_donacion WHERE codigo = $1', [id]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updatePatrocinadorDonacion = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query("UPDATE MAVpatrocinador_donacion SET monto_reales = $1, fecha_donacion = $2, cod_escuela_samba = $3, cod_hist_patrocinador = $4 WHERE codigo = $5",[request.monto_reales, request.fecha_donacion, request.cod_escuela_samba, request.cod_hist_patrocinador, req.params.id]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getPatrocinadorDonacion, insertPatrocinadorDonacion, deletePatrocinadorDonacion, updatePatrocinadorDonacion}