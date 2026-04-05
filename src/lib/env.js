// // import dotenv from "dotenv";

// // dotenv.config({ quiet: true });

// import dotenv from 'dotenv';
// dotenv.config({ quiet: true });

// export const ENV = {
//   PORT: process.env.PORT,
//   DB_URL: process.env.DB_URL,
//   NODE_ENV: process.env.NODE_ENV,
//   CLIENT_URL: process.env.CLIENT_URL,
//   INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
//   INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
//   STREAM_API_KEY: process.env.STREAM_API_KEY,
//   STREAM_API_SECRET: process.env.STREAM_API_SECRET,
// };











import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env with explicit path
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Debug: Check what's loaded
console.log('📁 Loading .env from:', path.resolve(__dirname, '../../.env'));
console.log('🔑 STREAM_API_KEY present:', !!process.env.STREAM_API_KEY);
console.log('🔑 STREAM_API_SECRET present:', !!process.env.STREAM_API_SECRET);

export const ENV = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
};

// Validate critical environment variables
if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
  console.error('❌ CRITICAL: Stream API credentials are missing!');
  console.error('STREAM_API_KEY:', ENV.STREAM_API_KEY ? '✅' : '❌');
  console.error('STREAM_API_SECRET:', ENV.STREAM_API_SECRET ? '✅' : '❌');
}