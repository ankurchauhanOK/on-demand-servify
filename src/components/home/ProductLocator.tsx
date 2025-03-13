
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Map, Search, Wifi, WifiOff, Navigation, 
  Tag, Filter, Zap, ShoppingBag 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProductLocator() {
  return (
    <section className="container-py bg-gray-50">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="heading-lg mb-3">Find Products Near You</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Locate products in nearby stores with real-time availability updates, 
            smart navigation, and personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="bg-primary/10 p-6 relative">
                <Map className="h-48 w-full text-primary/40" />
                <div className="absolute top-8 left-12 h-6 w-6 rounded-full bg-green-500 animate-pulse border-2 border-white"></div>
                <div className="absolute top-24 right-24 h-6 w-6 rounded-full bg-amber-500 animate-pulse border-2 border-white"></div>
                <div className="absolute bottom-16 left-32 h-6 w-6 rounded-full bg-red-500 animate-pulse border-2 border-white"></div>
                <div className="absolute top-6 right-6 rounded-lg bg-white p-2 shadow-md">
                  <Filter className="h-5 w-5 text-gray-600" />
                </div>
                <div className="absolute bottom-6 right-6 rounded-lg bg-white p-2 shadow-md">
                  <Navigation className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Nearby Stores</h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Wifi className="h-3 w-3" /> Live Updates
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">MedPlus Pharmacy</p>
                      <p className="text-xs text-muted-foreground">0.8 km away</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">In Stock</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">City Pharma</p>
                      <p className="text-xs text-muted-foreground">1.2 km away</p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Limited Stock</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">HealthMart</p>
                      <p className="text-xs text-muted-foreground">1.5 km away</p>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Out of Stock</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Advanced Search Filters</h3>
                <p className="text-muted-foreground">Filter results by price, distance, quantity, and special offers to find exactly what you need.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                <Navigation className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Smart Map Navigation</h3>
                <p className="text-muted-foreground">Get turn-by-turn directions to stores with your desired products in stock.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Real-Time Inventory Updates</h3>
                <p className="text-muted-foreground">See live inventory updates so you never waste a trip to a store that's out of stock.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                <WifiOff className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Offline Mode Support</h3>
                <p className="text-muted-foreground">Access cached product information and last-known availability even without internet.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Alternative Recommendations</h3>
                <p className="text-muted-foreground">Get intelligent suggestions for alternative products or nearby stores if an item is unavailable.</p>
              </div>
            </div>

            <Button asChild size="lg" className="w-fit mt-2">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
