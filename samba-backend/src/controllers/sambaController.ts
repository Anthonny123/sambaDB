import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getSambaData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM samba");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    await client.query(`INSERT INTO samba (letra, nombre_cancion, year_carnaval, tipo)
                VALUES ($1, $2, $3, $4)`, [req.body.letra, req.body.nombre_cancion, req.body.year_carnaval, req.body.tipo]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

export {getSambaData, insertData}
