import { NewsLetter } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const newsletter: NewsLetter[] = [
  { id: 1, email: "subscriber1@example.com" },
  { id: 2, email: "subscriber2@example.com" },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(newsletter);
}
