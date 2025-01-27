import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  // req is an instance of http.IncomingMessage
  // res is an instance of http.ServerResponse
  const { username } = await req.json();

  const response = await sql`
        SELECT * FROM user_workout where username = ${username};
`;
  const user = response.rows;

  return NextResponse.json({ user });
}
