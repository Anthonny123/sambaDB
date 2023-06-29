import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getOrganizacionCarnaval = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * MAVorganizacion_carnaval");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertOrganizacionCarnaval = async (req: Request, res: Response) => {
  try {
    const request = req.body;
    const client = await pool.connect();
    await client.query(`INSERT INTO MAVorganizacion_carnaval (ano, cod_escuela_samba, cod_integrante_escuela, fecha_inicio, cod_rol)
                VALUES ($1, $2, $3, $4, $5)`, [request.ano, request.cod_escuela_samba, request.cod_integrante_escuela, request.fecha_inicio, request.cod_rol]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

const deleteOrganizacionCarnaval = async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const client = await pool.connect();
    await client.query('DELETE FROM MAVorganizacion_carnaval WHERE ano = $1, cod_escuela_samba = $2, cod_integrante_escuela = $3, fecha_inicio = $4, cod_rol = $5', [request.ano, request.cod_escuela_samba, request.cod_integrante_escuela, request.fecha_inicio, request.cod_rol]);
    client.release(true)
    res.status(200).json({message:"Dato eliminado de manera satisfactoria"})
  }catch(err){
    console.error("Error al eliminar dato", err)
    res.status(500).json({error: "Error al eliminar datos"})
  }
}

const updateOrganizacionCarnaval= async(req:Request, res:Response)=>{
  try{
    const request = req.body
    const params = req.params
    const client = await pool.connect();
    await client.query("UPDATE MAVhist_titulo_escuela SET ano = $1, cod_escuela_samba = $2, cod_integrante_escuela = $3, fecha_inicio = $4, cod_rol = $5 WHERE ano = $6, cod_escuela_samba = $7, cod_integrante_escuela = $8, fecha_inicio = $9, cod_rol = $10",[request.ano, request.cod_escuela_samba, request.cod_integrante_escuela, request.fecha_inicio, request.cod_rol, params.ano, params.ces, params.cie, params.fi, params.cr]);
    client.release(true)
    res.status(200).json({message:"Dato actualizado de manera satisfactoria"})
  }catch(err){
    console.error("Error al actualizar dato", err)
    res.status(500).json({error: "Error al actualizar datos"})
  }
}

export {getOrganizacionCarnaval, insertOrganizacionCarnaval, deleteOrganizacionCarnaval, updateOrganizacionCarnaval}