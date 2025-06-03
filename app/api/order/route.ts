import { Order } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const orders: Order[] = [
  {
    id: 1,
    userId: 2,
    tableNumber: 4,
    items: [
      {
        dish: {
          id: 1,
          name: "Grilled Chicken",
          price: 12.99,
          categoryId: 2,
          isAvailable: true,
        },
        quantity: 2,
        notes: "No onions",
      },
      {
        dish: {
          id: 2,
          name: "Caesar Salad",
          price: 7.5,
          categoryId: 5,
          isAvailable: true,
        },
        quantity: 1,
      },
      {
        dish: {
          id: 3,
          name: "Chocolate Cake",
          price: 5.0,
          categoryId: 3,
          isAvailable: true,
        },
        quantity: 1,
        notes: "Extra cream",
      },
      {
        dish: {
          id: 4,
          name: "Lemonade",
          price: 3.0,
          categoryId: 4,
          isAvailable: true,
        },
        quantity: 3,
      },
      {
        dish: {
          id: 5,
          name: "Garlic Bread",
          price: 4.5,
          categoryId: 1,
          isAvailable: true,
        },
        quantity: 2,
      },
    ], // from CartItem
    totalAmount: 41.98,
    status: "preparing",
    createdAt: "2024-07-01T12:00:00Z",
    updatedAt: "2024-07-01T12:20:00Z",
    reservationId: 1,
    paymentMethod: "card",
  },
];
export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(orders);
}
