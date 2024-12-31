import './src/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: "./src/drizzle",
  dialect: "postgresql",
  schema: './src/drizzle/schema.ts',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
