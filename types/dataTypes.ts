export interface Dish {
  id: number;
  name: string;
  slug: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId: number;
  isAvailable: boolean;
  offer?: number;
  special?: boolean;
  tags?: string[]; // e.g., ['vegan', 'spicy']
  preparationTime?: number; // in minutes
  restaurantId: number;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string; // e.g., "No onions"
}

export interface Order {
  id: number;
  userId: number;
  tableNumber?: number;
  items: CartItem[];
  totalAmount: number;
  status: "pending" | "preparing" | "served" | "completed" | "cancelled";
  createdAt: string;
  updatedAt?: string;
  reservationId?: number;
  paymentMethod: "cash" | "card" | "mobile";
}

export interface Reservation {
  id: number;
  userId: number;
  tableNumber: number;
  guests: number;
  reservationTime: string; // ISO date
  status: "pending" | "confirmed" | "cancelled" | "completed";
  specialRequest?: string;
  createdAt: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: "customer" | "staff" | "admin";
  passwordHash?: string; // For backend use
  createdAt: string;
}

export interface NewsLetter {
  id: number;
  email: string;
}

export interface Table {
  number: number;
  seats: number;
  isAvailable: boolean;
  locationDescription?: string; // e.g., "Near window"
}

export interface Payment {
  id: number;
  orderId: number;
  amount: number;
  method: "cash" | "card" | "mobile";
  status: "pending" | "completed" | "failed";
  paidAt?: string;
  transactionId?: string;
}

export interface Staff {
  id: number;
  userId: number;
  position: "chef" | "waiter" | "manager" | "host";
  workingHours?: string;
  isActive: boolean;
}

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    day: string; // e.g., "Monday"
    open: string; // "08:00"
    close: string; // "22:00"
  }[];
  logoUrl?: string;
  about?: string;
  dishes: Dish[]; // Added: list of dishes offered by the restaurant
  tables: Table[];
}

export interface Review {
  id: number;
  userId: number;
  dishId?: number;
  reservationId?: number;
  rating: number; // 1–5
  comment?: string;
  createdAt: string;
}
