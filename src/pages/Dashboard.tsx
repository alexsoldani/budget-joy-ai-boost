
import { useState } from "react";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { BudgetOverviewCard } from "@/components/dashboard/BudgetOverviewCard";
import { ExpenseBreakdownCard } from "@/components/dashboard/ExpenseBreakdownCard";
import { FinancialGoalsCard } from "@/components/dashboard/FinancialGoalsCard";
import { JoyAICard } from "@/components/dashboard/JoyAICard";
import { MonthlySpendingCard } from "@/components/dashboard/MonthlySpendingCard";
import { RecentTransactionsCard } from "@/components/dashboard/RecentTransactionsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeOff, Eye, FileText, Lock } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const [panicMode, setPanicMode] = useState(false);
  
  const togglePanicMode = () => {
    setPanicMode(!panicMode);
    if (!panicMode) {
      toast.success("Privacy mode enabled. Your financial data is now hidden.");
    } else {
      toast.success("Privacy mode disabled. Your financial data is now visible.");
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your financial status.
          </p>
        </div>
        <Button
          onClick={togglePanicMode}
          variant={panicMode ? "outline" : "secondary"}
          className={`gap-2 ${panicMode ? "border-green-500 text-green-600" : ""}`}
        >
          {panicMode ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          {panicMode ? "Show Data" : "Hide Data"}
        </Button>
      </div>
      
      {panicMode ? (
        <div className="grid gap-6">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-muted-foreground" />
                Privacy Mode Enabled
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-12">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <EyeOff className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">Your financial data is hidden</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Privacy mode is currently active. Your financial information is hidden from view.
                Click "Show Data" to reveal your dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            <BalanceCard />
            <BudgetOverviewCard />
            <JoyAICard />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <ExpenseBreakdownCard />
            <MonthlySpendingCard />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <RecentTransactionsCard />
            <FinancialGoalsCard />
          </div>
        </>
      )}
    </div>
  );
}
