import dotenv from 'dotenv';
dotenv.config();

const MONGODB_USERNAME = process.env.MONGO_USERNAME || '';
const MONGODB_PASSWORD = process.env.MONGO_PASSWORD || '';
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

const MONGO_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.0ty8pc2.mongodb.net`;
export const apiConfig = {
  mongoDb: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
