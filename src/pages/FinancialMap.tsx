
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertTriangle, Flag, TreeDeciduous, Briefcase, Home, Sailboat, Target, Info } from "lucide-react";

export default function FinancialMap() {
  const [activeZone, setActiveZone] = useState("current");
  
  const zones = {
    debt: { name: "Debt Valley", color: "bg-red-500", icon: AlertTriangle, progress: 100 },
    survival: { name: "Survival Plains", color: "bg-orange-400", icon: TreeDeciduous, progress: 80 },
    current: { name: "Stability Hills", color: "bg-yellow-400", icon: Briefcase, progress: 60 },
    comfort: { name: "Comfort Meadows", color: "bg-green-400", icon: Home, progress: 40 },
    freedom: { name: "Freedom Shores", color: "bg-blue-400", icon: Sailboat, progress: 20 },
    legacy: { name: "Legacy Peak", color: "bg-purple-500", icon: Target, progress: 0 },
  };

  const achievements = [
    { id: 1, name: "First Budget Created", zone: "survival", completed: true },
    { id: 2, name: "Emergency Fund Started", zone: "survival", completed: true },
    { id: 3, name: "Debt Reduced by 25%", zone: "debt", completed: true },
    { id: 4, name: "All High-Interest Debt Paid", zone: "debt", completed: false },
    { id: 5, name: "6-Month Emergency Fund", zone: "stability", completed: false },
    { id: 6, name: "First Investment Made", zone: "stability", completed: true },
    { id: 7, name: "Homeownership Fund", zone: "comfort", completed: false },
    { id: 8, name: "Passive Income Stream", zone: "freedom", completed: false },
    { id: 9, name: "Financial Legacy Plan", zone: "legacy", completed: false },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Life Map</h1>
          <p className="text-muted-foreground">
            Your journey to financial freedom visualized as territories to conquer
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">This map visualizes your financial journey as territories to explore and conquer. Progress through each zone by completing financial milestones.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 overflow-hidden">
          <CardHeader>
            <CardTitle>Your Financial Territory</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full bg-gradient-to-b from-budgetjoy-soft-yellow to-budgetjoy-soft-purple overflow-hidden">
              {/* Map visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <div className="relative h-[300px]">
                    {/* Path/Journey line */}
                    <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-300 rounded-full transform -translate-y-1/2" />
                    
                    {/* Territory markers */}
                    {Object.entries(zones).map(([key, zone], index) => (
                      <div 
                        key={key}
                        className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer transition-all duration-300 ${activeZone === key ? 'scale-125' : ''}`}
                        style={{ left: `${index * 20}%` }}
                        onClick={() => setActiveZone(key)}
                      >
                        <div className={`${zone.color} rounded-full p-3 shadow-lg`}>
                          <zone.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <p className={`font-medium text-sm ${activeZone === key ? 'text-budgetjoy-purple' : ''}`}>{zone.name}</p>
                        </div>
                        {/* Progress flag */}
                        {zone.progress <= 60 && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <Flag className="h-5 w-5 text-budgetjoy-purple" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Current position indicator */}
                    <div 
                      className="absolute top-1/2 transform -translate-y-1/2 animate-pulse"
                      style={{ left: '40%' }}
                    >
                      <div className="h-6 w-6 rounded-full bg-budgetjoy-purple border-4 border-white shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Territory Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium flex items-center gap-2">
                  {zones[activeZone as keyof typeof zones].icon && 
                    <zones[activeZone as keyof typeof zones].icon className="h-5 w-5" />
                  }
                  {zones[activeZone as keyof typeof zones].name}
                </h3>
                <div className="mt-1 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-budgetjoy-purple h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${100 - zones[activeZone as keyof typeof zones].progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {zones[activeZone as keyof typeof zones].progress === 0 
                    ? 'Territory fully conquered!' 
                    : `${100 - zones[activeZone as keyof typeof zones].progress}% conquered`}
                </p>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Achievements in this territory</h4>
                <div className="space-y-2">
                  {achievements
                    .filter(a => a.zone === activeZone)
                    .map(achievement => (
                      <div key={achievement.id} className="flex items-center justify-between">
                        <span className={achievement.completed ? "" : "text-muted-foreground"}>
                          {achievement.name}
                        </span>
                        {achievement.completed ? (
                          <Badge variant="default" className="bg-green-500">Completed</Badge>
                        ) : (
                          <Badge variant="outline">In Progress</Badge>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Territory Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="achievements">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="nextSteps">Next Steps</TabsTrigger>
            </TabsList>
            <TabsContent value="achievements" className="space-y-4 mt-4">
              <div className="grid gap-2">
                {achievements
                  .filter(a => a.completed)
                  .map(achievement => (
                    <div key={achievement.id} className="flex items-center p-2 bg-green-50 rounded-md">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="nextSteps" className="space-y-4 mt-4">
              <div className="grid gap-2">
                {achievements
                  .filter(a => !a.completed)
                  .slice(0, 3)
                  .map(achievement => (
                    <div key={achievement.id} className="flex items-center p-2 bg-budgetjoy-soft-purple rounded-md">
                      <div className="h-8 w-8 rounded-full bg-budgetjoy-purple/20 flex items-center justify-center mr-3">
                        <Flag className="h-4 w-4 text-budgetjoy-purple" />
                      </div>
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <Button className="w-full bg-budgetjoy-purple hover:bg-budgetjoy-purple/90">
                View All Milestones
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
