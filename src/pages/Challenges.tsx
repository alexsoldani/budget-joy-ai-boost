
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Clock, AlertTriangle, Award, CheckCircle } from "lucide-react";

export default function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState<string | null>(null);
  
  const availableChallenges = [
    { 
      id: "emergency-fund",
      title: "Emergency Fund Challenge",
      description: "Survive 30 days with a sudden 50% income reduction by optimizing your budget",
      difficulty: "Medium",
      duration: "30 days",
      rewards: 500,
      progress: 0,
      status: "available",
      scenario: "Your main income source has been reduced by 50%. Adjust your budget to maintain essential services without going into debt.",
      lessons: [
        "How to prioritize essential expenses",
        "Identifying quick cost-cutting opportunities",
        "Maintaining financial resilience during income shocks"
      ]
    },
    { 
      id: "unexpected-expense",
      title: "Unexpected Expense Challenge",
      description: "Handle a major unexpected expense without disrupting your savings goals",
      difficulty: "Hard",
      duration: "14 days",
      rewards: 750,
      progress: 0,
      status: "available",
      scenario: "Your car requires a $1,200 repair that you didn't plan for. Find a way to cover this expense without touching your emergency fund or going into debt.",
      lessons: [
        "Finding temporary income sources",
        "Negotiating payment plans",
        "Reprioritizing short-term spending"
      ]
    },
    { 
      id: "debt-snowball",
      title: "Debt Snowball Challenge",
      description: "Accelerate your debt repayment by finding extra funds in your monthly budget",
      difficulty: "Easy",
      duration: "45 days",
      rewards: 350,
      progress: 65,
      status: "active",
      scenario: "You have multiple debts totaling $5,000. Create a plan to eliminate them as quickly as possible using the debt snowball method.",
      lessons: [
        "Debt prioritization strategies",
        "Creating a focused repayment plan",
        "Psychological benefits of debt snowball method"
      ]
    }
  ];
  
  const completedChallenges = [
    { 
      id: "grocery-budget",
      title: "Grocery Budget Slasher",
      description: "Reduce your grocery spending by 30% for two weeks while maintaining nutrition",
      difficulty: "Easy",
      duration: "14 days",
      rewards: 250,
      completedOn: "April 15, 2025",
      lessons: [
        "Meal planning strategies",
        "Bulk buying fundamentals",
        "Price comparison techniques"
      ]
    },
    { 
      id: "no-spend",
      title: "No-Spend Weekend",
      description: "Successfully complete an entire weekend without spending any money",
      difficulty: "Medium",
      duration: "2 days",
      rewards: 150,
      completedOn: "May 3, 2025",
      lessons: [
        "Identifying spending triggers",
        "Low-cost entertainment alternatives",
        "Preparation for spending restrictions"
      ]
    }
  ];
  
  const startChallenge = (id: string) => {
    setActiveChallenge(id);
    // In a real app, would track this in a database
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financial Survival Challenges</h1>
        <p className="text-muted-foreground">
          Test your financial resilience with real-world scenarios
        </p>
      </div>
      
      <Tabs defaultValue="available">
        <TabsList className="grid grid-cols-3 w-[400px]">
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="active">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {availableChallenges
              .filter(challenge => challenge.status === "available")
              .map(challenge => (
                <Card key={challenge.id} className="overflow-hidden border-2 border-transparent hover:border-budgetjoy-purple/30 transition-all">
                  <CardHeader className="bg-gradient-to-r from-budgetjoy-purple/10 to-budgetjoy-pink/5">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Shield className="h-5 w-5 text-budgetjoy-purple" />
                        {challenge.title}
                      </CardTitle>
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{challenge.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-amber-500" />
                          <span>{challenge.rewards} points</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-6 py-4">
                    <Button 
                      className="w-full bg-budgetjoy-purple hover:bg-budgetjoy-purple/90"
                      onClick={() => startChallenge(challenge.id)}
                    >
                      Start Challenge
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-6 mt-6">
          {availableChallenges
            .filter(challenge => challenge.status === "active" || challenge.id === activeChallenge)
            .map(challenge => (
              <Card key={challenge.id} className="overflow-hidden border-2 border-budgetjoy-purple">
                <CardHeader className="bg-gradient-to-r from-budgetjoy-purple/20 to-budgetjoy-pink/10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Shield className="h-5 w-5 text-budgetjoy-purple" />
                      {challenge.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-budgetjoy-purple text-budgetjoy-purple">
                      In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    
                    <div className="p-4 bg-muted rounded-md">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        Challenge Scenario
                      </h4>
                      <p className="text-sm text-muted-foreground">{challenge.scenario}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">What You'll Learn</h4>
                      <ul className="space-y-1">
                        {challenge.lessons.map((lesson, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-4 flex justify-between">
                  <Button variant="outline">Give Up</Button>
                  <Button className="bg-budgetjoy-purple hover:bg-budgetjoy-purple/90">
                    Continue Challenge
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
          {(availableChallenges.filter(c => c.status === "active" || c.id === activeChallenge).length === 0) && (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <Shield className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Active Challenges</h3>
              <p className="text-muted-foreground max-w-md">
                You don't have any challenges in progress. Start a new challenge from the Available tab to test your financial resilience.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {completedChallenges.map(challenge => (
              <Card key={challenge.id} className="overflow-hidden border border-green-200">
                <CardHeader className="bg-green-50">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      {challenge.title}
                    </CardTitle>
                    <Badge className="bg-green-500">Completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Completed on {challenge.completedOn}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Lessons Learned</h4>
                    <ul className="space-y-1">
                      {challenge.lessons.map((lesson, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-muted-foreground">{challenge.duration}</span>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{challenge.rewards} points earned</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-budgetjoy-purple" />
            Your Challenge Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-budgetjoy-purple mb-1">2</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-budgetjoy-pink mb-1">400</div>
              <div className="text-sm text-muted-foreground">Total Points Earned</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-budgetjoy-orange mb-1">
                87<span className="text-xl">%</span>
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
