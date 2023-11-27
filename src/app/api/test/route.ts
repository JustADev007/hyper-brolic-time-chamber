import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  // req is an instance of http.IncomingMessage
  const { username } = await req.json();
  // res is an instance of http.ServerResponse
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
}
export { handler as GET, handler as POST };
