
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function JoyAICard() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // In a real app, this would call an AI endpoint
    // For now we'll simulate a response
    const aiResponses = [
      "Based on your spending patterns, I recommend cutting back on restaurant expenses to save an extra $120 this month.",
      "Your savings are on track for your vacation goal! Keep it up and you'll reach your target by December.",
      "I've noticed recurring subscription charges that you might not be using. Would you like me to provide a detailed analysis?",
      "Your spending in the shopping category is 15% higher than last month. This might impact your monthly savings goal."
    ];
    
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    setResponse(randomResponse);
    setMessage("");
  };
  
  return (
    <Card className="border-budgetjoy-purple/20 shadow-md overflow-hidden transition-all hover:shadow-budgetjoy-purple/10">
      <CardHeader className="bg-gradient-to-r from-budgetjoy-purple/10 to-budgetjoy-pink/10">
        <CardTitle className="flex items-center gap-2">
          <span className="text-budgetjoy-purple">Joy</span>
          <span className="text-budgetjoy-pink">AI</span>
          <span className="text-xs bg-budgetjoy-purple text-white px-2 py-0.5 rounded-full ml-auto">Beta</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="bg-budgetjoy-soft-purple p-3 rounded-lg rounded-tl-none max-w-[80%]">
            <p className="text-sm">
              Hello! I'm JoyAI, your financial assistant. How can I help you today with your finances?
            </p>
          </div>
          
          {response && (
            <div className="bg-budgetjoy-soft-purple p-3 rounded-lg rounded-tl-none max-w-[80%] animate-fade-in">
              <p className="text-sm">{response}</p>
            </div>
          )}
          
          <div className="flex gap-2">
            <Input
              placeholder="Ask me anything about your finances..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-budgetjoy-purple hover:bg-budgetjoy-purple/90"
            >
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
