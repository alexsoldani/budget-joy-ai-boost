
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { BudgetOverviewCard } from "@/components/dashboard/BudgetOverviewCard";
import { ExpenseBreakdownCard } from "@/components/dashboard/ExpenseBreakdownCard";
import { FinancialGoalsCard } from "@/components/dashboard/FinancialGoalsCard";
import { JoyAICard } from "@/components/dashboard/JoyAICard";
import { MonthlySpendingCard } from "@/components/dashboard/MonthlySpendingCard";
import { RecentTransactionsCard } from "@/components/dashboard/RecentTransactionsCard";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your financial status.
        </p>
      </div>
      
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
    </div>
  );
}
