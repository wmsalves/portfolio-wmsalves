"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg text-center text-foreground p-4">
      <h1 className="text-8xl font-bold text-primary/20">404</h1>
      <h2 className="mt-4 text-3xl font-bold">{t("notFound.title")}</h2>
      <p className="mt-4 max-w-md text-muted">{t("notFound.message")}</p>
      <Link href="/" className="mt-8">
        <Button variant="primary">{t("notFound.cta")}</Button>
      </Link>
    </div>
  );
}
