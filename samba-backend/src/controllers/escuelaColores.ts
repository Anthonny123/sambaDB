import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getColoresEscuelas = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM MAVC_E");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertColoresEscuela = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVC_E (cod_escuela_samba, cod_color)
                VALUES ($1, $2)`, [request.cod_escuela_samba, request.cod_color]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteColoresEscuela = async(req:Request, res:Response)=>{
  try{
    const params = req.params
    const client = await pool.connect();
    await client.query('DELETE FROM MAVC_E WHERE cod_escuela_samba = $1, cod_color = $2', [params.ces, params.cc]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateColoresEscuela= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVC_E SET cod_escuela_samba = $1, cod_color = $2 WHERE cod_escuela_samba = $3, cod_color = $4",[request.cod_escuela_samba, request.cod_color, params.ces, params.cc]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getColoresEscuelas, insertColoresEscuela, deleteColoresEscuela, updateColoresEscuela}