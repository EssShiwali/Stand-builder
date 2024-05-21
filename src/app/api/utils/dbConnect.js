import { Pool } from 'pg';

export const pool = new Pool({
    user: process.env.USER_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
});

export default async function dbConnect() {
    try {
        const client = await pool.connect();
        console.log("Connected to the database");
        const result = await client.query("SELECT NOW()");
        console.log("Query executed successfully:", result.rows);
        client.release();
    } catch (err) {
        console.error("Error in connection or query execution:", err.stack);
    }
}
