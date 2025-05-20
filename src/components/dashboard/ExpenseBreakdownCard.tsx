
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

const data = [
  { name: "Housing", value: 1200, color: "#8B5CF6" },
  { name: "Food", value: 450, color: "#D946EF" },
  { name: "Transportation", value: 350, color: "#F97316" },
  { name: "Entertainment", value: 180, color: "#0EA5E9" },
  { name: "Shopping", value: 320, color: "#FFDEE2" },
  { name: "Healthcare", value: 250, color: "#F2FCE2" },
  { name: "Others", value: 150, color: "#FEF7CD" },
];

export function ExpenseBreakdownCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="h-[220px] w-full max-w-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke={entry.color}
                      strokeWidth={activeIndex === index ? 2 : 0}
                      className="transition-all duration-200"
                      style={{
                        filter: activeIndex === index ? "drop-shadow(0 0 4px rgba(0,0,0,0.2))" : "none",
                        transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                        transformOrigin: "center",
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`$${value}`, "Amount"]}
                  contentStyle={{ borderRadius: "8px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2 mt-4 md:mt-0 w-full max-w-sm">
            {data.map((item, index) => (
              <div 
                key={item.name}
                className={cn(
                  "flex items-center justify-between p-2 rounded transition-colors", 
                  activeIndex === index ? "bg-slate-100" : ""
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium">${item.value}</span>
                  <span className="text-xs text-muted-foreground">
                    {Math.round((item.value / total) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
