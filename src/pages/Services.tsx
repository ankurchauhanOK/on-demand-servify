
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, Scissors, HeartPulse, Wrench, 
  PartyPopper, BookOpen, Car, PawPrint,
  Search, Filter, Star, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Service category data
const categories = [
  {
    id: "home-cleaning",
    title: "Home Cleaning & Repairs",
    icon: Home,
    services: [
      { id: "deep-cleaning", name: "Deep Cleaning", price: "From $99", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
      { id: "plumbing", name: "Plumbing Services", price: "From $49", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1609881142760-298c5e62b42d?auto=format&fit=crop&w=600&q=80" },
      { id: "electrical", name: "Electrical Work", price: "From $59", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" },
      { id: "ac-repair", name: "AC Repair & Service", price: "From $79", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    id: "beauty",
    title: "Beauty & Grooming",
    icon: Scissors,
    services: [
      { id: "womens-salon", name: "Women's Salon at Home", price: "From $39", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600&q=80" },
      { id: "mens-salon", name: "Men's Haircut & Grooming", price: "From $29", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80" },
      { id: "spa", name: "Spa Treatments", price: "From $69", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" },
      { id: "makeup", name: "Professional Makeup", price: "From $49", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    id: "health",
    title: "Health & Fitness",
    icon: HeartPulse,
    services: [
      { id: "personal-training", name: "Personal Training", price: "From $39/hr", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80" },
      { id: "yoga", name: "Yoga Instruction", price: "From $29/hr", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80" },
      { id: "nutrition", name: "Nutrition Consulting", price: "From $49", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80" },
      { id: "physiotherapy", name: "Physiotherapy", price: "From $59", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    id: "maintenance",
    title: "Home Maintenance",
    icon: Wrench,
    services: [
      { id: "pest-control", name: "Pest Control", price: "From $69", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1632832288086-3a9a1641913e?auto=format&fit=crop&w=600&q=80" },
      { id: "painting", name: "Painting Services", price: "From $199", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=600&q=80" },
      { id: "carpentry", name: "Carpentry Work", price: "From $79", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=600&q=80" },
      { id: "gardening", name: "Gardening & Lawn Care", price: "From $49", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1599685315640-4cbebf6cdb57?auto=format&fit=crop&w=600&q=80" },
    ]
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-12 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg text-white/90">
              Discover a wide range of professional services designed to make your life easier.
              All delivered by verified experts in their fields.
            </p>
          </div>
        </div>
      </section>

      <section className="container-py">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for services..."
                className="w-full pl-10 md:w-80"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Options
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="mb-6 flex w-full flex-wrap gap-2">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="home-cleaning">Home Cleaning</TabsTrigger>
              <TabsTrigger value="beauty">Beauty & Grooming</TabsTrigger>
              <TabsTrigger value="health">Health & Fitness</TabsTrigger>
              <TabsTrigger value="maintenance">Home Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8">
                {categories.map((category) => (
                  <div key={category.id}>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <category.icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-semibold">{category.title}</h2>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="gap-1 text-sm text-primary">
                        <Link to={`/services/${category.id}`}>
                          View All <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {category.services.map((service) => (
                        <Link key={service.id} to={`/services/${category.id}/${service.id}`}>
                          <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="aspect-[4/3] w-full overflow-hidden">
                              <img
                                src={service.imageUrl}
                                alt={service.name}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="mb-1 font-semibold">{service.name}</h3>
                                  <p className="text-sm text-muted-foreground">{service.price}</p>
                                </div>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span>{service.rating}</span>
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="mb-6 flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.services.map((service) => (
                    <Link key={service.id} to={`/services/${category.id}/${service.id}`}>
                      <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={service.imageUrl}
                            alt={service.name}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="mb-1 font-semibold">{service.name}</h3>
                              <p className="text-sm text-muted-foreground">{service.price}</p>
                            </div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{service.rating}</span>
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Services;
