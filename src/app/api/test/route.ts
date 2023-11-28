import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  // req is an instance of http.IncomingMessage
  const { username, stack } = await req.json();
  // res is an instance of http.ServerResponse
  if (stack == "Fullbody") {
    const response =
      await sql`INSERT INTO user_workout (username, day, exercise_name, sets, reps)
 SELECT 
    ${username} as username,
    day,
    exercise_name,
    sets,
    reps
 FROM full_body_workout;`;
    const user = response.rows;

    return NextResponse.json({ user });
  } else {
    const response =
      await sql`INSERT INTO user_workout (username, day, exercise_name, sets, reps)
 SELECT 
    ${username} as username,
    day,
    exercise_name,
    sets,
    reps
 FROM ppl_workout;`;
    const user = response.rows;

    return NextResponse.json({ user });
  }
}
