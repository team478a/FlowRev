import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "フロー収益の定期化",
    description: "単発取引をサブスクリプションモデルへ転換し、安定した収益基盤を構築します。",
  },
  {
    title: "顧客分析ダッシュボード",
    description: "LTV・チャーンレート・MRRをリアルタイムで可視化し、意思決定を支援します。",
  },
  {
    title: "自動請求・収納",
    description: "定期請求から入金消込まで、収益回収プロセスを完全自動化します。",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              フロービジネスを
              <br />
              <span className="text-primary">リカーリング化</span>する
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              FlowRevは、単発・フロー型の取引を継続課金モデルへ転換するSaaSプラットフォームです。
              安定した収益基盤の構築をワンストップでサポートします。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button size="lg">無料で始める</Button>
              </Link>
              <Button variant="outline" size="lg">
                デモを見る
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="text-center text-3xl font-bold">主な機能</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-3xl font-bold">今すぐ収益を安定させましょう</h2>
            <p className="mt-4 text-muted-foreground">14日間の無料トライアル。クレジットカード不要。</p>
            <div className="mt-8">
              <Link href="/dashboard">
                <Button size="lg">ダッシュボードへ</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
