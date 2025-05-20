
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-budgetjoy-purple mb-4">404</h1>
        <p className="text-xl text-budgetjoy-charcoal mb-6">
          Oops! Looks like the budget flew away
        </p>
        <p className="text-muted-foreground mb-8">
          We can't find the page you're looking for. Let's get you back on track to financial success!
        </p>
        <Button asChild className="bg-budgetjoy-purple hover:bg-budgetjoy-purple/90">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
