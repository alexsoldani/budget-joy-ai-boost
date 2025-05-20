
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type BudgetCategoryProps = {
  name: string;
  spent: number;
  total: number;
  color: string;
};

const BudgetCategory = ({ name, spent, total, color }: BudgetCategoryProps) => {
  const percentage = Math.min(100, Math.round((spent / total) * 100));
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="font-medium">
          ${spent.toLocaleString()} / ${total.toLocaleString()}
        </span>
      </div>
      <Progress value={percentage} className="h-2" style={{ backgroundColor: `${color}20` }}>
        <div 
          className="h-full rounded-full" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color 
          }}
        />
      </Progress>
    </div>
  );
};

export function BudgetOverviewCard() {
  const categories = [
    { name: "Housing", spent: 1200, total: 1500, color: "#8B5CF6" },
    { name: "Food", spent: 450, total: 500, color: "#D946EF" },
    { name: "Transportation", spent: 350, total: 300, color: "#F97316" },
    { name: "Entertainment", spent: 180, total: 200, color: "#0EA5E9" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <BudgetCategory
              key={category.name}
              name={category.name}
              spent={category.spent}
              total={category.total}
              color={category.color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
