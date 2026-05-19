import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "MRR", value: "¥0", description: "月次経常収益" },
  { label: "ARR", value: "¥0", description: "年次経常収益" },
  { label: "顧客数", value: "0", description: "アクティブ顧客" },
  { label: "チャーンレート", value: "0%", description: "月次解約率" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">概要</h2>
        <p className="text-muted-foreground">ビジネスの主要指標を確認できます。</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="pb-2">
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle className="text-3xl">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>収益トレンド</CardTitle>
            <CardDescription>過去12ヶ月のMRR推移</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">グラフはここに表示されます</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>最近のアクティビティ</CardTitle>
            <CardDescription>直近の顧客・契約の更新</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">アクティビティはここに表示されます</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
