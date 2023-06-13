import express, { Request, Response } from 'express';
import { Pool } from 'pg';

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sambadatabase',
  password: 'lenovohp123',
  port: 5432,
});

// Creación de la aplicación Express
const app = express();
const port = 3000;

// Ruta de ejemplo para obtener todos los registros de una tabla
app.get('/registros', async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM samba');
    const registros = result.rows;
    client.release();
    res.json(registros);
  } catch (err) {
    console.error('Error al obtener los registros', err);
    res.status(500).json({ error: 'Error al obtener los registros' });
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
