"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "@/providers/datastore";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { XIcon } from "@phosphor-icons/react";

const AuthModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthOpen, mode, closeModal, openModal } = useStore();

  useEffect(() => {
    if (pathname === "/login") {
      openModal("login");
    } else if (pathname === "/register") {
      openModal("register");
    }
  }, [pathname]);

  const handleClose = () => {
    closeModal();
    if (pathname === "/login" || pathname === "/register") {
      router.push("/");
    }
  };

  if (!isAuthOpen || !mode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center flex-col bg-black/50">
      <div className="bg-white p-4 rounded-2xl w-full max-w-md flex min-h-fit relative">
        <span
          onClick={handleClose}
          className="absolute cursor-pointer top-4 right-4"
        >
          <XIcon color="red" size={20} />
        </span>
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;
