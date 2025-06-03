# **Eyang Restaurants**

A modern restaurant web application built using **Next.js 13+ (App Router)**, TypeScript, and a modular folder structure. The app supports booking, dish ordering, and user management.

---

## 🚀 Getting Started

### ✅ **Requirements**

- Node.js >= 18.x
- npm or yarn

### 🔧 **Installation**

```bash
git clone https://your-repo-url/eyang-restaurants.git
cd eyang-restaurants
npm install
```

### ▶️ **Start Development Server**

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Project Folder Structure

```
eyang_restaurants/
│
├── app/                    # Main app directory using App Router
│   ├── api/                # API routes
│   │   ├── category/       # Endpoints for dish categories
│   │   ├── dish/           # Endpoints for dishes
│   │   ├── newsLetter/     # Newsletter subscriptions
│   │   ├── order/          # Orders CRUD
│   │   ├── reservation/    # Reservation management
│   │   ├── restaurant/     # Restaurant info APIs
│   │   └── user/           # User management and auth
│   ├── menu/               # Routes for the public menu
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # App layout shell (shared layout, nav, etc.)
│   └── page.tsx            # Root homepage
│
├── components/             # Reusable UI components (e.g., buttons, modals)
│
├── font/                   # Custom font imports if any
│
├── public/
│   └── dish/               # Static dish images
│       ├── food1.webp
│       └── food2.webp
│
├── providers/              # React context providers
│   ├── datastore.tsx       # Shared state (e.g., cart, user info)
│   ├── notifications.tsx   # Toast or message notifications
│   └── queryProvider.tsx   # React Query setup (data fetching)
│
├── queries/                # TRPC/React-query logic (if used)
│
├── types/                  # TypeScript type definitions for all entities
│
├── .env                    # Environment variables
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata & scripts
└── README.md               # Project overview and usage
```

---

## 🛠️ How to Implement UI Components

### 🔹 In `/app/`

- This is where you create pages and routes.
- Create a new folder inside `/app/` with a `page.tsx` file to define a new route.

**Example: `app/about/page.tsx`**

```tsx
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <AboutSection />
    </main>
  );
}
```

### 🔹 In `/components/`

- This is where you store **reusable UI components** (e.g., `<DishCard />`, `<Navbar />`, `<TableSelector />`).

**Example: Create a reusable DishCard**

```tsx
// components/DishCard.tsx
import { Dish } from "@/types";

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="border p-4 rounded">
      <img src={`/dish/${dish.imageUrl}`} alt={dish.name} className="w-full" />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>${dish.price.toFixed(2)}</p>
    </div>
  );
}
```

**Usage in a page**

```tsx
import DishCard from "@/components/DishCard";

<DishCard dish={dishData} />;
```

---

## 📦 Environment Variables

Add your `.env` file at the root for any necessary credentials (e.g., DB, APIs):

```
DATABASE_URL=...
NEXT_PUBLIC_API_BASE_URL=...
```

---

## ✅ Additional Tips

- Use `/providers/datastore.tsx` for managing global state like cart or auth.
- Use `/types/` to define and extend models for maintainability.
- You can add more folders inside `/app/` to organize routes logically (e.g., `/dashboard/`, `/admin/`).
- Store static content in `/public/` and access them like: `/dish/food1.webp`.

---

## 📄 License

This project is open-source and can be adapted freely.
