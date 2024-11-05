"use client";

import { useEffect, useState } from "react";
import { Building2, Coins, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FallingBricks } from "@/components/FallingBricks";
import { StatsCard } from "@/components/StatsCard";
import { Feature } from "@/components/Feature";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-red-800 to-blue-900 relative overflow-hidden">
      <FallingBricks />

      <div className="relative max-w-6xl mx-auto px-4 py-12 text-white">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">
            WALL COIN
          </h1>
          <p className="text-3xl font-bold mb-8 text-yellow-400">
            THE ONLY COIN THAT KEEPS ON BUILDING!
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Buy Now
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatsCard
            icon={Coins}
            title="Total Supply"
            value="1,000,000,000"
            description="Tokens"
          />
          <StatsCard
            icon={Building2}
            title="Blocks Built"
            value={count.toString().padStart(2, "0")}
            description="And counting..."
          />
          <StatsCard
            icon={Lock}
            title="Liquidity"
            value="100%"
            description="Locked Forever"
          />
          <StatsCard
            icon={Shield}
            title="Security"
            value="Unbreakable"
            description="Like Our Spirit"
          />
        </div>

        {/* Community Banner */}
        <div className="text-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-8 rounded-lg mb-16">
          <h2 className="text-4xl font-black mb-4">
            SUPPORTERS DON&apos;T NEED SOCIAL MEDIA
          </h2>
          <p className="text-xl">
            We Build Our Community Brick By Brick! 🧱
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            title="NO PAPER HANDS"
            description="Diamond hands only! We're building something huge here!"
          />
          <Feature
            title="MASSIVE POTENTIAL"
            description="To the moon? No... To The Wall! 🚀"
          />
          <Feature
            title="STRONG COMMUNITY"
            description="United we stand, divided we... build anyway!"
          />
        </div>
      </div>
    </main>
  );
}