import { Pool } from "pg";

const globalForPg = globalThis as typeof globalThis & { waitlistDbPool?: Pool };

function getPoolOptions(): ConstructorParameters<typeof Pool>[0] {
  const connectionString = process.env.DATABASE_URL?.trim();
  const common = {
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  } as const;

  if (connectionString) {
    return { connectionString, ...common };
  }

  const host = process.env.DB_HOST?.trim();
  const user = process.env.DB_USER?.trim();
  const database = process.env.DB_NAME?.trim();
  const password = process.env.DB_PASSWORD ?? "";
  const rawPort = process.env.DB_PORT?.trim();
  const port = rawPort ? Number.parseInt(rawPort, 10) : 5432;

  if (!host || !user || !database) {
    throw new Error(
      "Database connection missing: set DATABASE_URL or DB_HOST, DB_USER, and DB_NAME (optional DB_PASSWORD, DB_PORT).",
    );
  }

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error("DB_PORT must be a positive integer.");
  }

  return {
    host,
    port,
    user,
    password,
    database,
    ...common,
  };
}

export function getWaitlistPool(): Pool {
  if (globalForPg.waitlistDbPool) return globalForPg.waitlistDbPool;

  globalForPg.waitlistDbPool = new Pool(getPoolOptions());

  return globalForPg.waitlistDbPool;
}
