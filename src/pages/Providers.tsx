
import { useState } from "react";
import { 
  Search, MapPin, Star, Filter, Check, 
  Shield, Calendar, Clock, MessageCircle 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock providers data
const providers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "RK",
    category: "Plumbing",
    rating: 4.9,
    jobsCompleted: 347,
    experience: "8 years",
    location: "Mumbai, Maharashtra",
    verified: true,
    description: "Expert plumber with experience in all types of household plumbing issues. Specialized in leakage detection and prevention.",
    availability: "Available Today",
    services: ["Water Leakage", "Pipe Fitting", "Tap Repair", "Basin & Sink"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "PS",
    category: "Beauty Expert",
    rating: 4.8,
    jobsCompleted: 215,
    experience: "6 years",
    location: "Delhi, Delhi",
    verified: true,
    description: "Certified beauty professional with experience in salon and bridal makeup. Specialized in haircuts, styling, and facial treatments.",
    availability: "Available Tomorrow",
    services: ["Haircut", "Styling", "Facial", "Makeup"],
  },
  {
    id: 3,
    name: "Ankit Singh",
    avatar: "AS",
    category: "Electrician",
    rating: 4.7,
    jobsCompleted: 182,
    experience: "5 years",
    location: "Bangalore, Karnataka",
    verified: true,
    description: "Trained electrician with expertise in household electrical work, wiring, and installations. Punctual and efficient service.",
    availability: "Available Today",
    services: ["Wiring", "Switch Repair", "Light Installation", "Fan Installation"],
  },
  {
    id: 4,
    name: "Neha Gupta",
    avatar: "NG",
    category: "Yoga Instructor",
    rating: 4.9,
    jobsCompleted: 139,
    experience: "7 years",
    location: "Pune, Maharashtra",
    verified: true,
    description: "Certified yoga instructor with experience teaching all levels. Specialized in Hatha, Vinyasa, and restorative practices.",
    availability: "Available in 2 Days",
    services: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "Pranayama"],
  },
  {
    id: 5,
    name: "Suresh Patel",
    avatar: "SP",
    category: "Carpenter",
    rating: 4.6,
    jobsCompleted: 201,
    experience: "10 years",
    location: "Hyderabad, Telangana",
    verified: true,
    description: "Professional carpenter with expertise in furniture repair, assembly, and custom wooden solutions for homes and offices.",
    availability: "Available Today",
    services: ["Furniture Assembly", "Door Repair", "Cabinet Work", "Wood Polishing"],
  },
  {
    id: 6,
    name: "Kavita Joshi",
    avatar: "KJ",
    category: "House Cleaner",
    rating: 4.8,
    jobsCompleted: 256,
    experience: "4 years",
    location: "Chennai, Tamil Nadu",
    verified: true,
    description: "Detailed-oriented house cleaner specializing in deep cleaning services. Uses eco-friendly products upon request.",
    availability: "Available Tomorrow",
    services: ["Deep Cleaning", "Kitchen Cleaning", "Bathroom Sanitization", "Floor Polishing"],
  },
];

const Providers = () => {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  // Filter providers based on category
  const filteredProviders = category === "all" 
    ? providers 
    : providers.filter(provider => provider.category.toLowerCase().includes(category.toLowerCase()));

  // Sort providers based on sortBy
  const sortedProviders = [...filteredProviders].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience);
    return b.jobsCompleted - a.jobsCompleted;
  });

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-12 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6">Our Service Providers</h1>
            <p className="text-lg text-white/90">
              Meet our team of verified professionals ready to deliver exceptional services
              at your doorstep. All experts are background-checked and highly rated.
            </p>
          </div>
        </div>
      </section>

      <section className="container-py">
        <div className="container">
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for providers..."
                  className="w-full pl-10"
                />
              </div>
            </div>
            
            <div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="beauty">Beauty Expert</SelectItem>
                  <SelectItem value="electrician">Electrician</SelectItem>
                  <SelectItem value="yoga">Yoga Instructor</SelectItem>
                  <SelectItem value="carpenter">Carpenter</SelectItem>
                  <SelectItem value="cleaner">House Cleaner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="jobs">Most Jobs Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarImage src={`/avatar-${provider.id}.jpg`} alt={provider.name} />
                        <AvatarFallback className="text-lg">{provider.avatar}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{provider.name}</h3>
                          {provider.verified && (
                            <Badge variant="outline" className="flex gap-1 border-green-500 text-green-500">
                              <Check className="h-3 w-3" /> Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{provider.category}</p>
                        <div className="mt-1 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{provider.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({provider.jobsCompleted} jobs)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">{provider.description}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{provider.location}</span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {provider.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="rounded-full">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <Badge className="rounded-full bg-green-100 text-green-700">
                      {provider.availability}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button asChild size="sm">
                        <Link to={`/providers/${provider.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Providers;
