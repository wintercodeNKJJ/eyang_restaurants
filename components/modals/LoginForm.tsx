// components/modals/LoginModal.tsx
"use client";
import { useStore } from "@/providers/datastore";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const { openModal, closeModal } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-black w-full">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await signIn("credentials", { email, password, redirect: false });
            closeModal();
          }}
          className="flex flex-col gap-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="p-2"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="p-2"
          />
          <button
            type="submit"
            className=" bg-[var(--primary)] p-2 rounded-full w-full"
          >
            Login
          </button>
        </form>
        <button onClick={() => signIn("google")} className="btn mt-2">
          Login with Google
        </button>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => openModal("register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
