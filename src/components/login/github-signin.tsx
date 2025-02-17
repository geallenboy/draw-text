"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { signinWithGithub } from "@/lib/auth";

export const GithubSignin = () => {
  const loginT = useTranslations("login");
  return (
    <Button type="button" variant="outline" onClick={signinWithGithub} className="w-full">
      <Image
        src="https://authjs.dev/img/providers/github.svg"
        alt="Google logo"
        width={20}
        height={20}
        className="mr-2"
      />
      {loginT("github")}
    </Button>
  );
};
