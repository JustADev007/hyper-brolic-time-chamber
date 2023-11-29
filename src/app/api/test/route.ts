import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  // req is an instance of http.IncomingMessage
  const { username, stack, intensity } = await req.json();
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
  }
  if (stack == "Push,Pull,Legs") {
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
  if (stack == "Upper/Lower" && intensity == "Strength") {
    const response =
      await sql`INSERT INTO user_workout (username, day, exercise_name, sets, reps)
 SELECT 
    ${username} as username,
    day,
    exercise_name,
    sets,
    reps
 FROM ul_strength_training_split;`;
    const user = response.rows;

    return NextResponse.json({ user });
  } else if (stack == "Upper/Lower" && intensity == "Hypertrophy") {
    const response =
      await sql`INSERT INTO user_workout (username, day, exercise_name, sets, reps)
 SELECT 
    ${username} as username,
    day,
    exercise_name,
    sets,
    reps
 FROM ul_hypertrophy_split;`;
    const user = response.rows;

    return NextResponse.json({ user });
  }
}
