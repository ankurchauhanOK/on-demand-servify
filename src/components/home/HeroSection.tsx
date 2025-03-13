
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="container flex flex-col items-center gap-8 py-16 md:py-24 text-center">
        <h1 className="heading-xl max-w-3xl">
          Your One-Stop Solution for All Home Services
        </h1>
        <p className="max-w-2xl text-lg text-white/90">
          Book trusted professionals for your everyday needs. From home cleaning to beauty services,
          we've got you covered with just a few taps.
        </p>
        
        <div className="w-full max-w-lg rounded-full bg-white p-1.5 flex">
          <Input 
            type="text" 
            placeholder="What service do you need?" 
            className="flex-1 border-none bg-transparent text-black focus-visible:ring-0 focus-visible:ring-offset-0" 
          />
          <Button size="sm" className="rounded-full">
            <Search className="mr-2 h-4 w-4" />
            Find Services
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-white/80">Popular:</span>
          <Link to="/services/home-cleaning" className="rounded-full bg-white/20 px-3 py-1 hover:bg-white/30">
            Home Cleaning
          </Link>
          <Link to="/services/plumbing" className="rounded-full bg-white/20 px-3 py-1 hover:bg-white/30">
            Plumbing
          </Link>
          <Link to="/services/salon" className="rounded-full bg-white/20 px-3 py-1 hover:bg-white/30">
            Salon at Home
          </Link>
          <Link to="/services/ac-repair" className="rounded-full bg-white/20 px-3 py-1 hover:bg-white/30">
            AC Repair
          </Link>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-1/3 translate-x-1/4 transform text-white/5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M37.6,-65.2C47.3,-59.5,53.4,-46.6,62.2,-34.1C71,-21.6,82.5,-10.8,81.8,-0.4C81.2,10,68.4,20,59.4,31.5C50.5,43,45.4,56,35.7,62.3C26,68.7,13,68.4,-0.4,69.1C-13.8,69.8,-27.5,71.5,-38.4,66.5C-49.3,61.5,-57.3,49.9,-64.3,37.7C-71.3,25.5,-77.3,12.8,-77.1,0C-76.9,-12.7,-70.6,-25.4,-62.2,-35.6C-53.8,-45.7,-43.3,-53.3,-32.1,-58.4C-20.9,-63.4,-10.4,-65.9,1.8,-69C14,-72.1,28,-70.8,37.6,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute left-0 bottom-0 h-full w-1/3 -translate-x-1/4 transform text-white/5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M46.5,-78.3C59.1,-71.6,68,-57.5,75.4,-42.9C82.7,-28.3,88.6,-14.1,88.6,0.1C88.7,14.3,82.9,28.5,74.1,40.3C65.2,52.1,53.3,61.4,40.2,67.1C27,72.8,13.5,75,0.3,74.4C-12.9,73.9,-25.7,70.7,-38.7,65.1C-51.6,59.4,-64.7,51.3,-72.2,39.5C-79.8,27.7,-82,12.3,-80.8,-2.4C-79.6,-17.1,-75.1,-31.6,-67.1,-44.3C-59.1,-57,-47.5,-67.9,-34.5,-74C-21.5,-80.2,-7.2,-81.7,7.3,-83.2C21.8,-84.7,33.9,-85,46.5,-78.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
}
