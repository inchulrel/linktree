import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

// 링크 클릭 1회 기록: POST { linkId }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (typeof linkId !== "string" || !links.some((l) => l.id === linkId)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const db = await getDb();
  if (!db) {
    return Response.json({ ok: false, reason: "MONGODB_URI 미설정" }, { status: 503 });
  }

  await db
    .collection<ClickDoc>("clicks")
    .updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });

  return Response.json({ ok: true });
}

// 링크별 클릭 수 조회: GET
export async function GET() {
  const db = await getDb();
  if (!db) {
    return Response.json({ error: "MONGODB_URI 미설정" }, { status: 503 });
  }

  const docs = await db.collection<ClickDoc>("clicks").find().toArray();
  const counts = Object.fromEntries(
    links.map((l) => [l.id, docs.find((d) => d._id === l.id)?.count ?? 0]),
  );

  return Response.json({ counts });
}
