
import { 
  MapPin, CheckCheck, CalendarClock, Timer, 
  MessageCircle, Lightbulb, Tag, Shield 
} from "lucide-react";

const features = [
  {
    title: "Location-Based Matching",
    description: "Connect with nearby professionals based on your location for faster service.",
    icon: MapPin,
  },
  {
    title: "One-Tap Booking",
    description: "Book services with a single tap and receive instant confirmations.",
    icon: CheckCheck,
  },
  {
    title: "Flexible Scheduling",
    description: "Choose between immediate service or schedule for a future date and time.",
    icon: CalendarClock,
  },
  {
    title: "Real-Time Tracking",
    description: "Track your service provider's arrival and monitor service progress.",
    icon: Timer,
  },
  {
    title: "In-App Communication",
    description: "Chat directly with service providers for seamless coordination.",
    icon: MessageCircle,
  },
  {
    title: "Smart Recommendations",
    description: "Get AI-powered service suggestions based on your needs and preferences.",
    icon: Lightbulb,
  },
  {
    title: "Dynamic Pricing",
    description: "Transparent pricing with the ability to get custom quotes for special requests.",
    icon: Tag,
  },
  {
    title: "Safety & Trust",
    description: "All professionals are background-verified for your peace of mind.",
    icon: Shield,
  },
];

export function FeaturesSection() {
  return (
    <section className="container-py bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-3">Why Choose Servify</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our platform is designed to make booking and managing services 
            effortless, reliable, and secure for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
