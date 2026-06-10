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
        source VARCHAR(255) DEFAULT 'Quick Inquiry',
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Alter table to add source if it does not exist
    try {
      await connection.query("ALTER TABLE leads ADD COLUMN source VARCHAR(255) DEFAULT 'Quick Inquiry'");
      console.log("Added 'source' column to 'leads' table.");
    } catch (err: any) {
      // Column might already exist, ignore duplicate column error (1060)
      if (err && err.errno !== 1060) {
        console.error("Error adding source column:", err);
      }
    }

    // Create dealers table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS dealers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        business_type VARCHAR(255) NOT NULL,
        experience TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    
    console.log("Database tables 'leads' and 'dealers' verified/created.");
    connection.release();
  } catch (error) {
    console.error("Error setting up database table:", error);
  }
}

// Initialize the database table structure
initDb();

export default pool;
