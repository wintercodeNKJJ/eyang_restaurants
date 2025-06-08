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
          slug: "Grilled_Chicken",
          price: 12.99,
          categoryId: 2,
          isAvailable: true,
          restaurantId: 2,
        },
        quantity: 2,
        notes: "No onions",
      },
      {
        dish: {
          id: 2,
          name: "Caesar Salad",
          slug: "Caesar_Salad",
          price: 7.5,
          categoryId: 5,
          isAvailable: true,
          restaurantId: 3,
        },
        quantity: 1,
      },
      {
        dish: {
          id: 3,
          name: "Chocolate Cake",
          slug: "Chocolate_Cake",
          price: 5.0,
          categoryId: 3,
          isAvailable: true,
          restaurantId: 3,
        },
        quantity: 1,
        notes: "Extra cream",
      },
      {
        dish: {
          id: 4,
          name: "Lemonade",
          slug: "Lemonade",
          price: 3.0,
          categoryId: 4,
          isAvailable: true,
          restaurantId: 1,
        },
        quantity: 3,
      },
      {
        dish: {
          id: 5,
          name: "Garlic Bread",
          slug: "Garlic_Bread",
          price: 4.5,
          categoryId: 1,
          isAvailable: true,
          restaurantId: 2,
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
  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const order = await request.json();
  if (order) {
    const lastOrder = orders.length > 0 ? orders[orders.length - 1] : undefined;
    orders.push({ id: lastOrder ? lastOrder.id + 1 : 1, ...order });
  }
  return NextResponse.json(order);
}

export async function PUT(request: NextRequest) {
  const neworder = await request.json();
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const order = orders.map((x) => {
      if (x.id == parseInt(id)) {
        x.status = neworder.status;
      }
    });
    console.log(order);
    console.log(orders);
    return NextResponse.json(order);
  }
  console.log(orders);
  return NextResponse.json({ error: "notfound" });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const order = orders.find((x) => x.id === parseInt(id));
    console.log(order);
    console.log(orders);
    return NextResponse.json(order);
  }
  console.log(orders);
  return NextResponse.json({ error: "notfound" });
}
