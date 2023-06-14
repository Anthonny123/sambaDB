import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sambadatabase",
    password: "lenovohp123",
    port: 5432,
  });

const getIntegranteEscuelaData = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM integrante_escuela");
    const registros = result.rows;
    client.release(true);
    res.status(200).json(registros)
  } catch (err) {
    console.error("Error al obtener los registros", err);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

const insertDataIntegranteEscuelaSamba = async (req: Request, res: Response) => {
  try {
    const request = req.body
    const client = await pool.connect();
    await client.query(`INSERT INTO integrante_escuela (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, documento_identidad, apodo, fecha_nacimiento, nacionalidad)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [request.primer_nombre, request.segundo_nombre, request.primer_apellido, request.segundo_apellido, request.documento_identidad, request.apodo, request.fecha_nacimiento, request.nacionalidad]);
    client.release(true)
    res.status(200).json({message:"Registro Satisfactorio"})
  } catch (err) {
    console.error("Error al insertar datos", err);
    res.status(500).json({ error: "Error al insertar datos" });
  }
};

export {insertDataIntegranteEscuelaSamba, getIntegranteEscuelaData}