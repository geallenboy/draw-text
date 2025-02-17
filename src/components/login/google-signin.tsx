"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { signinWithGoogle } from "@/lib/auth";

export const GoogleSignin = () => {
  const loginT = useTranslations("login");
  return (
    <Button type="button" variant="outline" onClick={signinWithGoogle} className="w-full">
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        width={20}
        height={20}
        className="mr-2"
      />
      {loginT("google")}
    </Button>
  );
};
