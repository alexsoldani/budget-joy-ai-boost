
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, User, ArrowRight, Medal, Gift } from "lucide-react";

export default function Rankings() {
  const [timeframe, setTimeframe] = useState("week");
  const [category, setCategory] = useState("all");
  
  const rankingData = {
    week: [
      { rank: 1, userId: "user14", avatar: "👤", savings: 147, savingsRate: 18.5, change: 2 },
      { rank: 2, userId: "user23", avatar: "👤", savings: 134, savingsRate: 16.2, change: 0 },
      { rank: 3, userId: "user08", avatar: "👤", savings: 122, savingsRate: 15.8, change: -1 },
      { rank: 4, userId: "you", avatar: "😀", savings: 112, savingsRate: 14.7, change: 3 },
      { rank: 5, userId: "user42", avatar: "👤", savings: 103, savingsRate: 12.5, change: -2 },
      { rank: 6, userId: "user19", avatar: "👤", savings: 98, savingsRate: 11.9, change: 0 },
      { rank: 7, userId: "user56", avatar: "👤", savings: 91, savingsRate: 10.8, change: 1 },
      { rank: 8, userId: "user31", avatar: "👤", savings: 87, savingsRate: 10.5, change: -1 },
      { rank: 9, userId: "user27", avatar: "👤", savings: 83, savingsRate: 9.7, change: 2 },
      { rank: 10, userId: "user03", avatar: "👤", savings: 78, savingsRate: 9.1, change: -1 },
    ],
    month: [
      { rank: 1, userId: "user23", avatar: "👤", savings: 580, savingsRate: 17.2, change: 0 },
      { rank: 2, userId: "user14", avatar: "👤", savings: 542, savingsRate: 16.5, change: 3 },
      { rank: 3, userId: "user42", avatar: "👤", savings: 520, savingsRate: 15.8, change: 0 },
      { rank: 4, userId: "user08", avatar: "👤", savings: 489, savingsRate: 14.9, change: -2 },
      { rank: 5, userId: "user19", avatar: "👤", savings: 462, savingsRate: 14.1, change: 1 },
      { rank: 6, userId: "user56", avatar: "👤", savings: 440, savingsRate: 13.5, change: -1 },
      { rank: 7, userId: "you", avatar: "😀", savings: 422, savingsRate: 13.2, change: 5 },
      { rank: 8, userId: "user31", avatar: "👤", savings: 415, savingsRate: 12.8, change: -1 },
      { rank: 9, userId: "user27", avatar: "👤", savings: 403, savingsRate: 12.3, change: 0 },
      { rank: 10, userId: "user03", avatar: "👤", savings: 387, savingsRate: 11.9, change: -2 },
    ],
  };
  
  const achievements = [
    { name: "Top 5% Saver", description: "You're in the top 5% of savers in your peer group", progress: 87, maxValue: 100 },
    { name: "Consistency King", description: "Save at least 10% for 5 consecutive weeks", progress: 4, maxValue: 5 },
    { name: "Budget Master", description: "Stay under budget in all major categories", progress: 3, maxValue: 5 },
  ];
  
  const rewards = [
    { name: "Premium Dashboard Theme", points: 250, unlocked: true },
    { name: "Advanced Budget Templates", points: 500, unlocked: false },
    { name: "AI Financial Insight Report", points: 750, unlocked: false },
  ];
  
  const getRankingCategoryOptions = () => [
    { value: "all", label: "Overall Savings" },
    { value: "groceries", label: "Grocery Savings" },
    { value: "utilities", label: "Utilities Savings" },
    { value: "dining", label: "Dining Out Savings" },
    { value: "transportation", label: "Transportation Savings" },
  ];
  
  const getPositionChange = (change: number) => {
    if (change > 0) return <span className="text-green-500">↑{change}</span>;
    if (change < 0) return <span className="text-red-500">↓{Math.abs(change)}</span>;
    return <span className="text-yellow-500">-</span>;
  };
  
  const getRankEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "";
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Savings Rankings</h1>
        <p className="text-muted-foreground">
          Compare your savings performance with similar users
        </p>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <Card className="flex-1 min-w-[250px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              Your Rank
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-4">
            <div className="text-6xl mb-2 font-bold text-budgetjoy-purple">
              #{timeframe === "week" ? 4 : 7}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-green-500">↑{timeframe === "week" ? 3 : 5} this {timeframe}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              You're in the top {timeframe === "week" ? "40%" : "70%"} of savers in your peer group
            </p>
          </CardContent>
        </Card>
        
        <Card className="flex-1 min-w-[250px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Your Savings Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">This {timeframe}</p>
                  <p className="text-2xl font-medium">{timeframe === "week" ? "14.7%" : "13.2%"}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Target: 15%</span>
                  <span className="text-sm text-muted-foreground">
                    {timeframe === "week" ? "14.7%" : "13.2%"}/15%
                  </span>
                </div>
                <Progress value={timeframe === "week" ? 98 : 88} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Peer Rankings</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {getRankingCategoryOptions().map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Weekly</SelectItem>
                <SelectItem value="month">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Rank</th>
                  <th className="px-4 py-3 text-left">User</th>
                  <th className="px-4 py-3 text-right">Savings</th>
                  <th className="px-4 py-3 text-right">Rate</th>
                  <th className="px-4 py-3 text-center">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rankingData[timeframe as keyof typeof rankingData].map((user) => (
                  <tr 
                    key={user.rank} 
                    className={`${user.userId === "you" ? "bg-budgetjoy-soft-purple" : ""}`}
                  >
                    <td className="px-4 py-3">
                      <span className="flex items-center">
                        {getRankEmoji(user.rank)}
                        <span className={user.rank <= 3 ? "font-semibold" : ""}>#{user.rank}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {user.avatar}
                        </div>
                        <span className="font-medium">{user.userId === "you" ? "You" : user.userId}</span>
                        {user.userId === "you" && <Badge className="ml-1 bg-budgetjoy-purple">You</Badge>}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">${user.savings}</td>
                    <td className="px-4 py-3 text-right">{user.savingsRate}%</td>
                    <td className="px-4 py-3 text-center">{getPositionChange(user.change)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-budgetjoy-purple" />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{achievement.name}</h4>
                    <span className="text-sm text-muted-foreground">
                      {achievement.progress}/{achievement.maxValue}
                    </span>
                  </div>
                  <Progress value={(achievement.progress / achievement.maxValue) * 100} className="h-2" />
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
              <Button className="w-full mt-2" variant="outline">
                View All Achievements
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-budgetjoy-pink" />
              Savings Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rewards.map((reward, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <h4 className="font-medium">{reward.name}</h4>
                    <p className="text-sm text-muted-foreground">{reward.points} points needed</p>
                  </div>
                  <Button variant={reward.unlocked ? "default" : "outline"} size="sm">
                    {reward.unlocked ? "Claim" : "Lock"}
                  </Button>
                </div>
              ))}
              <div className="pt-2">
                <Button className="w-full" variant="outline">
                  <span>View Reward Shop</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
