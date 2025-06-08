// components/modals/RegisterModal.tsx
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useStore } from "@/providers/datastore";
import { UserQuery } from "@/queries/userQuery";

export default function RegisterForm() {
  const userQueries = new UserQuery();
  const { openModal, closeModal } = useStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <div className=" text-black w-full">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await userQueries.createUser({
              ...formData,
              role: "customer",
              createdAt: new Date().toISOString(),
            });
            await signIn("credentials", {
              email: formData.email,
              password: formData.password,
              redirect: false,
            });
            closeModal();
          }}
        >
          <input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="First Name"
            className="input"
          />
          <input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="Last Name"
            className="input"
          />
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
            type="email"
            className="input"
          />
          <input
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Phone"
            className="input"
          />
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
            type="password"
            className="input"
          />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => openModal("login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
