import { NextResponse } from "next/server";

const API_KEY = process.env.LASTFM_API_KEY!;
const USERNAME = process.env.LASTFM_USERNAME!;

export async function GET() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
    );

    if (!res.ok) {
      return NextResponse.json({
        error: "Failed to fetch data",
        status: res.status,
      });
    }
    const data = await res.json();
    console.log("scrobbler data", data);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
