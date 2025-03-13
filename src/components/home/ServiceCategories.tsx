
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, Scissors, HeartPulse, Wrench, 
  PartyPopper, BookOpen, Car, PawPrint,
  ArrowRight
} from "lucide-react";

// Service category data
const categories = [
  {
    id: "home-cleaning",
    title: "Home Cleaning & Repairs",
    description: "Professional cleaning, plumbing, electrical & AC repair services",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "beauty",
    title: "Beauty & Grooming",
    description: "Salon services for men and women in the comfort of your home",
    icon: Scissors,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "health",
    title: "Health & Fitness",
    description: "Personal trainers, yoga instructors, and fitness experts",
    icon: HeartPulse,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "maintenance",
    title: "Home Maintenance",
    description: "Pest control, carpentry, painting and general maintenance",
    icon: Wrench,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "events",
    title: "Event & Party Services",
    description: "Decorators, DJs, photographers for your special occasions",
    icon: PartyPopper,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "tutors",
    title: "Tutors & Trainers",
    description: "Language teachers, academic tutors, and skill instructors",
    icon: BookOpen,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "automotive",
    title: "Car & Bike Services",
    description: "Detailing, maintenance, and repair services for vehicles",
    icon: Car,
    color: "bg-gray-100 text-gray-600",
  },
  {
    id: "pet-care",
    title: "Pet Care",
    description: "Grooming, training, and vet consultations for your pets",
    icon: PawPrint,
    color: "bg-orange-100 text-orange-600",
  },
];

export function ServiceCategories() {
  return (
    <section className="container-py">
      <div className="mb-10 text-center">
        <h2 className="heading-lg mb-3">Our Service Categories</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover a wide range of professional services tailored to your everyday needs,
          all delivered by verified experts in their fields.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/services/${category.id}`}
            className="service-card group"
          >
            <div className={`service-card-icon ${category.color}`}>
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Explore services <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg">
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
