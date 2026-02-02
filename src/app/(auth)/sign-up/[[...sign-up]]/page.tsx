import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Mock Sign Up</h1>
      <p>This is a mock sign-up page for development without Clerk keys.</p>
      <Button asChild>
        <Link href="/resumes">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
