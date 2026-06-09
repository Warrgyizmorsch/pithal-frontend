import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pithal_amchines",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Self-run migration/setup query to ensure the table exists
async function initDb() {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully. Checking tables...");
    
    // Create leads table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        capacity VARCHAR(255) NOT NULL,
        requirement TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    
    console.log("Database table 'leads' verified/created.");
    connection.release();
  } catch (error) {
    console.error("Error setting up database table:", error);
  }
}

// Initialize the database table structure
initDb();

export default pool;
