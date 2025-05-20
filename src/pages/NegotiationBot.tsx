
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Bot, Copy, FileText, Send, Download, CheckCircle, PhoneCall, Mail, TrendingDown } from "lucide-react";
import { toast } from "sonner";

export default function NegotiationBot() {
  const [serviceType, setServiceType] = useState("internet");
  const [currentRate, setCurrentRate] = useState("");
  const [competitorRate, setCompetitorRate] = useState("");
  const [customerSince, setCustomerSince] = useState("1-2");
  const [emailTemplate, setEmailTemplate] = useState<string | null>(null);
  const [scriptTemplate, setScriptTemplate] = useState<string | null>(null);
  
  const generateTemplate = () => {
    // In a real app, this would use AI to generate a custom template
    // Here we'll use a pre-written template for demonstration
    
    const providerMap: Record<string, string> = {
      "internet": "Internet Provider",
      "cable": "Cable TV Company",
      "phone": "Phone Company",
      "insurance": "Insurance Company",
      "streaming": "Streaming Service",
    };
    
    const provider = providerMap[serviceType] || "Service Provider";
    
    const emailContent = `
Dear ${provider} Customer Service,

I hope this email finds you well. I have been a loyal customer for ${customerSince === "5+" ? "over 5 years" : customerSince + " years"} and have appreciated our business relationship.

Recently, I've been reviewing my monthly expenses and noticed that I'm currently paying $${currentRate || "[Current Rate]"} for your service. After researching the market, I've found that comparable services from competitors are available at $${competitorRate || "[Competitor Rate]"}, which is significantly lower than what I'm paying.

Given my history as a loyal customer, I would like to request a rate adjustment to match or come closer to the competitive offerings in the market. I value your service and would prefer to stay with your company, but my budget requires me to consider all options.

Would it be possible to adjust my rate to $${competitorRate || "[Requested Rate]"} per month? I believe this would be a fair rate that allows me to continue enjoying your service while maintaining my budget.

I look forward to your positive response and am available to discuss this matter further at your convenience.

Thank you for your consideration.

Sincerely,
[Your Name]
[Your Account Number]
[Your Contact Information]
    `;
    
    const phoneScript = `
INTRODUCTION:
"Hello, my name is [Your Name] and I've been a customer for ${customerSince === "5+" ? "over 5 years" : customerSince + " years"}, account number [Your Account Number]."

STATE PURPOSE:
"I'm calling about my ${serviceType} bill. I've noticed I'm paying $${currentRate || "[Current Rate]"} monthly, but I've found competitors offering similar services for $${competitorRate || "[Competitor Rate]"}."

MAKE REQUEST:
"As a loyal customer, I'd like to request a rate adjustment to match the competitive rate. I'd prefer to stay with your company, but my budget requires me to consider all options."

IF THEY OFFER A DISCOUNT:
- If it's acceptable: "Thank you, that works for me. When will this new rate take effect?"
- If it's not enough: "I appreciate the offer, but that's still significantly higher than competitor rates. Is there any way you could match the $${competitorRate || "[Competitor Rate]"} rate?"

IF THEY SAY NO:
"I understand. In that case, could you transfer me to your retention department? I'd like to explore other options before making a decision about cancelling my service."

CLOSING:
"Thank you for your help with this matter. I appreciate your time and assistance."

NOTES:
- Stay polite but firm
- Mention your loyalty as a customer
- Have competitor offers ready to reference
- Be prepared to mention that you're considering cancellation if necessary
    `;
    
    setEmailTemplate(emailContent);
    setScriptTemplate(phoneScript);
    
    toast.success("Templates generated successfully!");
  };
  
  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };
  
  const negotiationTemplates = [
    { id: "internet", name: "Internet Provider", type: "Monthly Service", potentialSavings: "$15-30" },
    { id: "cable", name: "Cable TV", type: "Monthly Service", potentialSavings: "$20-40" },
    { id: "phone", name: "Phone Plan", type: "Monthly Service", potentialSavings: "$10-25" },
    { id: "insurance", name: "Insurance", type: "Monthly Service", potentialSavings: "$30-100" },
    { id: "streaming", name: "Streaming Services", type: "Monthly Service", potentialSavings: "$5-15" },
    { id: "gym", name: "Gym Membership", type: "Monthly Service", potentialSavings: "$5-20" },
    { id: "bank", name: "Banking Fees", type: "Financial", potentialSavings: "$10-30" },
    { id: "credit", name: "Credit Card Interest", type: "Financial", potentialSavings: "$20-100" },
  ];
  
  const successStories = [
    { service: "Internet Provider", saved: "$240/year", technique: "Competitor rate negotiation" },
    { service: "Insurance Policy", saved: "$380/year", technique: "Bundle discount request" },
    { service: "Cell Phone Plan", saved: "$180/year", technique: "Loyalty discount" },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Negotiation Bot</h1>
        <p className="text-muted-foreground">
          Get personalized templates to negotiate lower rates on your recurring expenses
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-budgetjoy-purple" />
              Negotiation Template Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email">
              <TabsList className="grid grid-cols-2 w-[300px] mb-6">
                <TabsTrigger value="email">Email Template</TabsTrigger>
                <TabsTrigger value="phone">Phone Script</TabsTrigger>
              </TabsList>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="service-type">Service Type</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger id="service-type">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internet">Internet Service</SelectItem>
                        <SelectItem value="cable">Cable TV</SelectItem>
                        <SelectItem value="phone">Phone Service</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="streaming">Streaming Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="current-rate">Current Monthly Rate ($)</Label>
                    <Input 
                      id="current-rate" 
                      placeholder="e.g., 89.99" 
                      value={currentRate}
                      onChange={(e) => setCurrentRate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="years-customer">Years as Customer</Label>
                    <Select value={customerSince} onValueChange={setCustomerSince}>
                      <SelectTrigger id="years-customer">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">More than 5 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="competitor-rate">Competitor Rate ($)</Label>
                    <Input 
                      id="competitor-rate" 
                      placeholder="e.g., 59.99" 
                      value={competitorRate}
                      onChange={(e) => setCompetitorRate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={generateTemplate} 
                className="w-full bg-budgetjoy-purple hover:bg-budgetjoy-purple/90 mb-6"
              >
                <Bot className="mr-2 h-4 w-4" />
                Generate Negotiation Templates
              </Button>
              
              <TabsContent value="email" className="mt-0">
                <div className="border rounded-md bg-muted/50 relative">
                  {emailTemplate ? (
                    <>
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => copyToClipboard(emailTemplate)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="p-4 whitespace-pre-wrap text-sm">{emailTemplate}</pre>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                      <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Fill in the details and generate your personalized email template
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="phone" className="mt-0">
                <div className="border rounded-md bg-muted/50 relative">
                  {scriptTemplate ? (
                    <>
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => copyToClipboard(scriptTemplate)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="p-4 whitespace-pre-wrap text-sm">{scriptTemplate}</pre>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                      <PhoneCall className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Fill in the details and generate your personalized phone script
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-500" />
                Potential Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500">
                  ${currentRate && competitorRate
                    ? Math.round((parseFloat(currentRate) - parseFloat(competitorRate)) * 12)
                    : "---"}
                </div>
                <p className="text-muted-foreground">Estimated annual savings</p>
              </div>
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Success Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Be polite but firm in your requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Research competitor rates before negotiating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Mention your loyalty and payment history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Be prepared to mention cancellation</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {successStories.map((story, idx) => (
                  <div key={idx} className="p-3 bg-green-50 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{story.service}</span>
                      <Badge className="bg-green-500">{story.saved}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Using: {story.technique}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Negotiable Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {negotiationTemplates.map((template) => (
              <div key={template.id} className="border rounded-md p-4 hover:border-budgetjoy-purple cursor-pointer transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{template.name}</h4>
                  <Badge variant="outline">{template.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Potential savings: {template.potentialSavings}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setServiceType(template.id)}
                >
                  Create Template
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
