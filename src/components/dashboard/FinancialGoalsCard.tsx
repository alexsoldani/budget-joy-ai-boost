
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

type GoalProps = {
  title: string;
  current: number;
  target: number;
  color: string;
  deadline: string;
};

function Goal({ title, current, target, color, deadline }: GoalProps) {
  const percentage = Math.min(100, Math.round((current / target) * 100));
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4" style={{ color }} />
          <span className="font-medium">{title}</span>
        </div>
        <span className="text-sm text-muted-foreground">{deadline}</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>${current.toLocaleString()}</span>
          <span>${target.toLocaleString()}</span>
        </div>
        <Progress value={percentage} className="h-2" style={{ backgroundColor: `${color}20` }}>
          <div 
            className="h-full rounded-full transition-all duration-500" 
            style={{ width: `${percentage}%`, backgroundColor: color }}
          />
        </Progress>
      </div>
    </div>
  );
}

export function FinancialGoalsCard() {
  const goals = [
    { 
      title: "Emergency Fund", 
      current: 3500, 
      target: 5000, 
      color: "#8B5CF6", 
      deadline: "Aug 2023" 
    },
    { 
      title: "Dream Vacation", 
      current: 1200, 
      target: 3000, 
      color: "#D946EF", 
      deadline: "Dec 2023" 
    },
    { 
      title: "New Car", 
      current: 4500, 
      target: 15000, 
      color: "#F97316", 
      deadline: "Jun 2024" 
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal) => (
            <Goal key={goal.title} {...goal} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
