import { Reservation } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const reservations: Reservation[] = [
  {
    id: 1,
    userId: 2,
    tableNumber: 4,
    guests: 3,
    reservationTime: "2024-07-01T11:30:00Z",
    status: "confirmed",
    specialRequest: "Window seat",
    createdAt: "2024-06-30T09:00:00Z",
  },
];

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(reservations);
}
