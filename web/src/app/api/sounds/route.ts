import { NextRequest } from "next/server";

const XENO_CANTO_API = "https://xeno-canto.org/api/2/recordings";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (!query) {
    return Response.json({ recordings: [] });
  }

  try {
    const res = await fetch(
      `${XENO_CANTO_API}?query=${encodeURIComponent(query)}&page=1`,
      {
        headers: {
          "User-Agent":
            "NaturalistNurturer/1.0 (species flashcard app; Green River Preserve)",
        },
      }
    );

    if (!res.ok) {
      return Response.json({ recordings: [] }, { status: res.status });
    }

    const data = await res.json();
    // Return only the fields we need to minimize payload
    const recordings = (data.recordings || [])
      .slice(0, 5)
      .map(
        (rec: {
          id: string;
          file: string;
          rec: string;
          lic: string;
          length: string;
          q: string;
        }) => ({
          id: rec.id,
          file: rec.file,
          rec: rec.rec,
          lic: rec.lic,
          length: rec.length,
          q: rec.q,
        })
      );

    return Response.json({ recordings });
  } catch {
    return Response.json({ recordings: [] }, { status: 500 });
  }
}
