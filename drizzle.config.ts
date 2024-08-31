import type { Config } from 'drizzle-kit';

if (!process.env.NEXT_PUBLIC_TURSO_DATABASE_URL) {
  throw new Error('TURSO_DATABASE_URL environment variable is required.');
}

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_TURSO_DATABASE_URL!,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
  },
} satisfies Config;
