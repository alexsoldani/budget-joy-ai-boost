
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

export function BalanceCard() {
  return (
    <Card className="bg-gradient-to-br from-budgetjoy-purple to-budgetjoy-pink text-white transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">Total Balance</CardTitle>
        <PiggyBank className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$12,580.90</div>
        <p className="text-sm opacity-80 mt-2">
          <span className="text-emerald-300">↑ 12.5%</span> from last month
        </p>
      </CardContent>
    </Card>
  );
}
