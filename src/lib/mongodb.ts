import { MongoClient, type Db } from "mongodb";

// 개발 모드의 HMR 중에도 연결을 재사용하기 위해 global에 캐시합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

// MONGODB_URI가 없으면 null을 반환해 DB 없이도 페이지가 동작하게 합니다.
export async function getDb(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db(process.env.MONGODB_DB ?? "linktree");
}
