# 🍽️ **Eyang Restaurants**

A modern restaurant web application built using **Next.js 13+ App Router**, **TypeScript**, and a clean modular folder structure. The app provides functionality for **dish ordering**, **table reservations**, and **user management** for both customers and admins.

---

## 📊 Project Lifecycle & Development Phases

The development of the Eyang Restaurant web application followed a structured Software Development Lifecycle (SDLC) composed of several key phases:

---

### 🧠 1. **Requirements Analysis**

We started by understanding the needs of the client and the typical restaurant operations. The key modules identified were:

- **Menu Browsing**
- **Online Reservations**
- **Food Ordering**
- **Admin Dashboard (for orders, dishes, and users)**

**📎 _Placeholder: Functional requirements diagram_**
`[Insert use case diagram here]`

---

### 🧾 2. **Planning & Architecture Design**

The system architecture was mapped out, choosing **Next.js (App Router)** for the front end, and planning future extensibility for backend and database layers.

We also defined:

- API structure
- Component layout
- Folder hierarchy for maintainability

**📎 System architecture diagram\_**
![Insert architecture diagram showing Next.js structure, API endpoints, data flow]`

**📎 Entity Relationship Diagram (ERD)\_**
![Database](https://i.ibb.co/KcGj4Ksb/Happy-Meal-Robine-Ninone-Restauran-Website-Database-of-the-website-drawio.png)

---

### 🎨 3. **UI/UX Design**

Low-fidelity wireframes were created and later turned into reusable UI components in the `/components` folder. A mobile-first, clean user interface was prioritized.

- Components include: `Navbar`, `DishCard`, `ReservationForm`, etc.

**📎 Wireframe mockups (Homepage, Menu, Booking)\_**
![UI wireframes here](https://i.ibb.co/Q7SKgxjp/Happy-Meal-Robine-Ninone-Restauran-Website-Site-map-drawio.png)

---

### 🛠️ 4. **Development**

The app was built using **TypeScript**, **Next.js App Router**, and **TailwindCSS** for styling. We used **React Context (via providers)** and **React Query** for data fetching and caching.

API routes were created in `/app/api/`, supporting:

- Dishes (`/api/dish`)
- Orders (`/api/order`)
- Reservations (`/api/reservation`)
- Users (`/api/user`)
- Newsletter Subscriptions (`/api/newsletter`)

Real-time-like feedback was enabled using **React Toastify**.

---

### ✅ 5. **Testing**

- All features were manually tested to ensure usability across mobile and desktop.
- Booking and ordering flows were verified using mock user scenarios.
- TypeScript helped with compile-time checks and reliability.

---

### 🚀 6. **Deployment & Delivery**

The app is ready for deployment on **Vercel** or any Node-compatible hosting provider. Environment variables can be managed via `.env`.

A CI/CD pipeline can be integrated to streamline deployment.

---

## 🧰 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + Zustand (if needed)
- **Data Fetching**: React Query
- **Notifications**: React Toastify
- **Database**: (Pending backend integration, e.g., PostgreSQL or Firebase)

---

## 📌 Key Features Recap

- Browse dishes with images, description, and pricing
- Make a table reservation
- Place an order online
- Admin dashboard for managing orders, dishes, and users
- Responsive design for mobile and desktop

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
