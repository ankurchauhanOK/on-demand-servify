
import { 
  Brain, Target, Lightbulb, Sparkles, 
  MessageSquare, PieChart, BadgePercent, 
  UserCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function RecommendationEngine() {
  const recommendations = [
    {
      title: "Personalized Service Recommendations",
      description: "Get tailored service suggestions based on your past bookings, browsing patterns, and seasonal needs.",
      icon: Target,
      example: "Recently booked cleaning? Try our sanitization services.",
    },
    {
      title: "Smart Professional Matching",
      description: "Our AI matches you with service providers based on your specific needs, their expertise, and ratings.",
      icon: UserCheck,
      example: "Need specialized plumbing? We'll find an expert in that area.",
    },
    {
      title: "Context-Aware Suggestions",
      description: "Receive timely recommendations based on seasonal needs and upcoming events.",
      icon: Lightbulb,
      example: "Summer approaching? Schedule your AC maintenance now.",
    },
    {
      title: "Product & Service Bundles",
      description: "Discover related products that complement your service bookings for better results.",
      icon: Sparkles,
      example: "Booking a carpenter? Add essential hardware to your order.",
    },
    {
      title: "Dynamic Pricing Insights",
      description: "Get notified about the best times to book services at optimal prices.",
      icon: BadgePercent,
      example: "Book weekday morning slots for 15% off on salon services.",
    },
    {
      title: "Smart Feedback Analysis",
      description: "We analyze thousands of reviews to recommend the most reliable professionals.",
      icon: MessageSquare,
      example: "This plumber is highly rated for leak repairs.",
    },
  ];

  return (
    <section className="container-py">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="heading-lg mb-3">
            <span className="flex items-center justify-center gap-2">
              <Brain className="h-8 w-8 text-primary" /> 
              AI-Powered Recommendations
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our intelligent system provides personalized recommendations to enhance your experience
            and help you discover the perfect services and products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 inline-block text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <span className="font-medium">Example: </span>
                  {item.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-5 py-2 text-sm font-medium">
            <PieChart className="h-4 w-4 text-primary" />
            <span>Our recommendations are 95% more relevant than generic suggestions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
