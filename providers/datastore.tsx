import {
  Category,
  Dish,
  NewsLetter,
  Order,
  Reservation,
  Restaurant,
  User,
} from "@/types/dataTypes";
import { create } from "zustand";

type Store = {
  user: User | null;
  setUser: (user: User) => void;
  newsLetter: NewsLetter[];
  setNewsLetter: (newsLetter: NewsLetter[]) => void;
  restaurant: Restaurant[];
  setRestaurant: (restaurant: Restaurant[]) => void;
  dishes: Dish[];
  setDishes: (dish: Dish[]) => void;
  reservations: Reservation[];
  setReservations: (reservations: Reservation[]) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  orders: Order[];
  setOrders: (order: Order[]) => void;
  card: Order | null;
  setCard: (card: Order) => void;
  resetUser: () => void;
};

export const useStore = create<Store>()((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  newsLetter: [],
  setNewsLetter: (newsLetter) => set(() => ({ newsLetter })),
  restaurant: [],
  setRestaurant: (restaurant) => set(() => ({ restaurant })),
  dishes: [],
  setDishes: (dishes) => set(() => ({ dishes })),
  reservations: [],
  setReservations: (reservations) => set(() => ({ reservations })),
  categories: [],
  setCategories: (categories) => set(() => ({ categories })),
  orders: [],
  setOrders: (orders) => set(() => ({ orders })),
  card: null,
  setCard: (card) => set(() => ({ card })),
  resetUser: () =>
    set(() => ({
      user: null,
    })),
}));
