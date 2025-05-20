
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smile, Frown, Meh, Angry, Heart, TrendingUp, TrendingDown, HelpCircle } from "lucide-react";

export default function MoodTracker() {
  const [period, setPeriod] = useState("month");
  const [category, setCategory] = useState("all");
  
  // Mood data for different spending categories
  const moodData = {
    month: [
      { date: "Week 1", happy: 4, neutral: 3, sad: 2, angry: 1, amount: 340 },
      { date: "Week 2", happy: 2, neutral: 5, sad: 1, angry: 3, amount: 580 },
      { date: "Week 3", happy: 5, neutral: 2, sad: 1, angry: 0, amount: 420 },
      { date: "Week 4", happy: 3, neutral: 4, sad: 2, angry: 1, amount: 390 },
    ],
    week: [
      { date: "Mon", happy: 1, neutral: 1, sad: 0, angry: 0, amount: 45 },
      { date: "Tue", happy: 2, neutral: 0, sad: 1, angry: 0, amount: 90 },
      { date: "Wed", happy: 0, neutral: 2, sad: 0, angry: 1, amount: 120 },
      { date: "Thu", happy: 3, neutral: 0, sad: 0, angry: 0, amount: 70 },
      { date: "Fri", happy: 1, neutral: 1, sad: 2, angry: 1, amount: 180 },
      { date: "Sat", happy: 4, neutral: 1, sad: 0, angry: 0, amount: 210 },
      { date: "Sun", happy: 2, neutral: 2, sad: 1, angry: 0, amount: 150 },
    ]
  };
  
  // Mood insights based on spending patterns
  const moodInsights = [
    {
      emotion: "happy",
      icon: Smile,
      color: "text-green-500",
      insight: "You tend to feel happy after spending on experiences like dining out with friends and entertainment.",
      suggestion: "Consider budgeting specifically for positive experiences that bring you joy."
    },
    {
      emotion: "angry",
      icon: Angry,
      color: "text-red-500",
      insight: "Your spending on utility bills and unexpected expenses correlates with feelings of frustration.",
      suggestion: "Try setting up an 'unexpected expenses' fund to reduce financial stress."
    },
    {
      emotion: "sad",
      icon: Frown,
      color: "text-blue-500",
      insight: "Larger impulsive purchases often lead to regret or sadness in the following days.",
      suggestion: "Implement a 48-hour waiting period for non-essential purchases over $100."
    }
  ];
  
  const emotionToIcon = {
    happy: { icon: Smile, color: "text-green-500" },
    neutral: { icon: Meh, color: "text-yellow-500" },
    sad: { icon: Frown, color: "text-blue-500" },
    angry: { icon: Angry, color: "text-red-500" },
  };
  
  const getBudgetEmotionCategories = () => [
    { id: "groceries", name: "Groceries", emotion: "neutral", amount: 320 },
    { id: "dining", name: "Dining Out", emotion: "happy", amount: 240 },
    { id: "bills", name: "Bills & Utilities", emotion: "angry", amount: 450 },
    { id: "shopping", name: "Shopping", emotion: "happy", amount: 180 },
    { id: "entertainment", name: "Entertainment", emotion: "happy", amount: 150 },
    { id: "healthcare", name: "Healthcare", emotion: "sad", amount: 220 },
    { id: "transportation", name: "Transportation", emotion: "neutral", amount: 200 },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financial Mood Tracker</h1>
        <p className="text-muted-foreground">
          Understand the emotional impact of your spending habits
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 md:gap-6">
        <Card className="flex-1 min-w-[250px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-budgetjoy-pink" />
              Dominant Mood
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-4">
            <div className="text-[4rem] mb-2">
              <Smile className="h-20 w-20 text-green-500" />
            </div>
            <h3 className="text-xl font-medium">Happy Spender</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Your spending brings you joy, but be mindful of emotional spending triggers.
            </p>
          </CardContent>
        </Card>
        
        <Card className="flex-1 min-w-[250px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Positive Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Emotional Balance</p>
                  <p className="text-2xl font-medium">+24%</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <p className="text-sm">
                Your financial emotions have improved compared to last month.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1 min-w-[250px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              Watch Out
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Impulse Spending</p>
                  <p className="text-2xl font-medium">$180</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Angry className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <p className="text-sm">
                Spending associated with negative emotions increased this week.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Mood Spending Patterns</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dining">Dining Out</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="bills">Bills</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                happy: { color: "#22c55e" },
                neutral: { color: "#eab308" },
                sad: { color: "#3b82f6" },
                angry: { color: "#ef4444" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={moodData[period as keyof typeof moodData]} stackOffset="sign">
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="happy" stackId="a" fill="#22c55e" />
                  <Bar dataKey="neutral" stackId="a" fill="#eab308" />
                  <Bar dataKey="sad" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="angry" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Budget Categories by Emotion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {getBudgetEmotionCategories().map((category) => {
              const EmotionIcon = emotionToIcon[category.emotion as keyof typeof emotionToIcon].icon;
              const emotionColor = emotionToIcon[category.emotion as keyof typeof emotionToIcon].color;
              
              return (
                <div key={category.id} className="flex items-center justify-between p-2 rounded-md border">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ${emotionColor}`}>
                      <EmotionIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{category.name}</p>
                      <p className="text-sm text-muted-foreground">${category.amount}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <HelpCircle className="h-4 w-4" />
                    <span>Why?</span>
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-3">
        {moodInsights.map((insight, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center gap-2">
              <insight.icon className={`h-5 w-5 ${insight.color}`} />
              <CardTitle className="capitalize">{insight.emotion} Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{insight.insight}</p>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm font-medium">Suggestion</p>
                <p className="text-sm text-muted-foreground">{insight.suggestion}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
