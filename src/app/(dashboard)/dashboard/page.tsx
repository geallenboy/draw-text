import Title from "@/components/dashboard/title";
import { getUser } from "@/lib/supabase/queries";
import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const supabase = await createServer();
  const [user] = await Promise.all([getUser(supabase)]);
  if (!user) {
    return redirect("/login");
  }
  return (
    <section className="container mx-auto flex-1 space-y-6">
      <Title />
    </section>
  );
};

export default DashboardPage;
