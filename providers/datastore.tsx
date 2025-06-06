import {
  CartItem,
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
  resetUser: () => void;

  isOpen: boolean;
  cart: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  getTotal: () => number;

  setCart: (cart: CartItem[]) => void;
};

export const useStore = create<Store>()((set, get) => ({
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
  resetUser: () =>
    set(() => ({
      user: null,
    })),

  isOpen: false,
  cart: [],

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) => {
    const { cart } = get();
    const existing = cart.find((x) => x.dish.id === item.dish.id);
    if (existing) {
      set({
        cart: cart.map((x) =>
          x.dish.id === item.dish.id ? { ...x, quantity: x.quantity + 1 } : x
        ),
      });
    } else {
      set({ cart: [...cart, { ...item, quantity: 1 }] });
    }
  },

  removeItem: (id) => set({ cart: get().cart.filter((x) => x.dish.id !== id) }),

  incrementItem: (id) =>
    set({
      cart: get().cart.map((x) =>
        x.dish.id === id ? { ...x, quantity: x.quantity + 1 } : x
      ),
    }),

  decrementItem: (id) =>
    set({
      cart: get()
        .cart.map((x) =>
          x.dish.id === id ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter((x) => x.quantity > 0),
    }),

  getTotal: () =>
    get().cart.reduce(
      (total, item) => total + item.dish.price * item.quantity,
      0
    ),

  setCart: (cart) => set(() => ({ cart })),
}));
