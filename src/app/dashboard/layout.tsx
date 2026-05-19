import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "概要", href: "/dashboard" },
  { label: "顧客管理", href: "/dashboard/customers" },
  { label: "サブスクリプション", href: "/dashboard/subscriptions" },
  { label: "請求", href: "/dashboard/billing" },
  { label: "分析", href: "/dashboard/analytics" },
  { label: "設定", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r bg-sidebar-background">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="text-lg font-bold text-primary">
            FlowRev
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Separator className="my-4" />
          <div className="px-3 py-2 text-xs text-muted-foreground">
            ログイン中: user@example.com
          </div>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b px-6">
          <h1 className="text-sm font-medium text-muted-foreground">管理画面</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
