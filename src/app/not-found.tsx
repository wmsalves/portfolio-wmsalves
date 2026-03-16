import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg text-center text-foreground p-4">
      <h1 className="text-8xl font-bold text-primary/20">404</h1>
      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
      <p className="mt-4 max-w-md text-muted">
        It seems you got lost in hyperspace. The page you are looking for does
        not exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Back to Base</Button>
      </Link>
    </div>
  );
}
