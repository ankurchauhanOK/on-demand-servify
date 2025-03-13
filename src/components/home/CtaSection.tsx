
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Clock, Award } from "lucide-react";

export function CtaSection() {
  return (
    <section className="container-py bg-teal-500 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="heading-lg mb-6">Ready to Experience Hassle-Free Services?</h2>
            <p className="mb-8 text-lg text-white/90">
              Join thousands of satisfied customers who've discovered the convenience
              of on-demand professional services with Servify.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-6 w-6 text-white" />
                <div>
                  <h3 className="font-semibold">Verified Pros</h3>
                  <p className="text-sm text-white/80">Background-checked professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Users className="h-6 w-6 text-white" />
                <div>
                  <h3 className="font-semibold">10,000+ Users</h3>
                  <p className="text-sm text-white/80">Trusted by thousands</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-6 w-6 text-white" />
                <div>
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-sm text-white/80">Services within hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Award className="h-6 w-6 text-white" />
                <div>
                  <h3 className="font-semibold">Satisfaction</h3>
                  <p className="text-sm text-white/80">100% quality guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-teal-600 hover:bg-white/90">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative max-w-md">
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cleaning service"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded-2xl border border-white/20 bg-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
