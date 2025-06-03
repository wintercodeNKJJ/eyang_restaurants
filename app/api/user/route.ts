import { User } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const users: User[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    phone: "+1234567890",
    role: "customer",
    createdAt: "2024-01-15T09:00:00Z",
  },
];

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(users);
}
