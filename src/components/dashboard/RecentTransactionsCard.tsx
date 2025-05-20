
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PiggyBank, ShoppingCart, Coffee, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: "food" | "shopping" | "housing" | "income";
};

const transactions: Transaction[] = [
  {
    id: "t1",
    title: "Apartment Rent",
    amount: -1200,
    date: "May 15, 2023",
    category: "housing",
  },
  {
    id: "t2",
    title: "Salary",
    amount: 3500,
    date: "May 10, 2023",
    category: "income",
  },
  {
    id: "t3",
    title: "Grocery Shopping",
    amount: -126.50,
    date: "May 8, 2023",
    category: "shopping",
  },
  {
    id: "t4",
    title: "Coffee Shop",
    amount: -8.75,
    date: "May 5, 2023",
    category: "food",
  },
];

const getCategoryIcon = (category: Transaction["category"]) => {
  switch (category) {
    case "food":
      return <Coffee className="h-4 w-4" />;
    case "shopping":
      return <ShoppingCart className="h-4 w-4" />;
    case "housing":
      return <Home className="h-4 w-4" />;
    case "income":
      return <PiggyBank className="h-4 w-4" />;
    default:
      return <ShoppingCart className="h-4 w-4" />;
  }
};

const getCategoryColor = (category: Transaction["category"]) => {
  switch (category) {
    case "food":
      return "bg-budgetjoy-orange text-white";
    case "shopping":
      return "bg-budgetjoy-pink text-white";
    case "housing":
      return "bg-budgetjoy-purple text-white";
    case "income":
      return "bg-emerald-500 text-white";
    default:
      return "bg-slate-500 text-white";
  }
};

export function RecentTransactionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
              <div className="flex items-center space-x-3">
                <div className={cn("p-2 rounded-full", getCategoryColor(transaction.category))}>
                  {getCategoryIcon(transaction.category)}
                </div>
                <div>
                  <div className="font-medium">{transaction.title}</div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <div className={cn(
                "font-medium",
                transaction.amount > 0 ? "text-emerald-600" : "text-gray-700"
              )}>
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
