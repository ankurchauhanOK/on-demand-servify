
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="container-py">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-3">How It Works</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Booking a service is quick and easy. Just follow these simple steps 
            to get professional help in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
              1
            </div>
            <h3 className="mb-2 text-xl font-semibold">Choose a Service</h3>
            <p className="text-muted-foreground">
              Browse through our wide range of professional services and select what you need.
            </p>
            
            {/* Connector - Only visible on desktop */}
            <div className="absolute right-0 top-16 hidden h-0.5 w-1/2 bg-gray-200 md:block"></div>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
              2
            </div>
            <h3 className="mb-2 text-xl font-semibold">Book in Seconds</h3>
            <p className="text-muted-foreground">
              Select a convenient time slot and confirm your booking with just a few taps.
            </p>
            
            {/* Connectors - Only visible on desktop */}
            <div className="absolute left-0 top-16 hidden h-0.5 w-1/2 bg-gray-200 md:block"></div>
            <div className="absolute right-0 top-16 hidden h-0.5 w-1/2 bg-gray-200 md:block"></div>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
              3
            </div>
            <h3 className="mb-2 text-xl font-semibold">Relax & Enjoy</h3>
            <p className="text-muted-foreground">
              Our verified professionals will arrive at your doorstep to provide high-quality service.
            </p>
            
            {/* Connector - Only visible on desktop */}
            <div className="absolute left-0 top-16 hidden h-0.5 w-1/2 bg-gray-200 md:block"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
