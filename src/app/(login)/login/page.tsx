import React from "react";
import LoginForm from "@/components/login/login-form";
import LoginImage from "@/components/login/login-image";
import { createServer } from "@/lib/supabase/server";
import { getUser } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const supabase = await createServer();
  const [user] = await Promise.all([getUser(supabase)]);
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <LoginImage />
      <div className="relative flex flex-col items-center justify-center p-8 h-full w-full">
        <div className=" w-[400px] mx-auto">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
