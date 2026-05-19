import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">FlowRev</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              ダッシュボード
            </Button>
          </Link>
          <Button size="sm">ログイン</Button>
        </nav>
      </div>
    </header>
  );
}
