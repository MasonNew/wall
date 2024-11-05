import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description: string;
}

export function StatsCard({ icon: Icon, title, value, description }: StatsCardProps) {
  return (
    <Card className="bg-white/10 border-none text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}