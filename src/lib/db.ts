import { Pool } from "pg";

let pool: Pool | undefined;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set. The database must be provisioned for this app to work.");
    }
    pool = new Pool({ connectionString });
  }
  return pool;
}
