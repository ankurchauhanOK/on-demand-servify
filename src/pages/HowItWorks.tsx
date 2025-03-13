
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  PhoneCall, Calendar, Home, Clipboard, 
  Clock, CreditCard, ThumbsUp, MessageCircle 
} from "lucide-react";

const HowItWorks = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-12 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6">How Servify Works</h1>
            <p className="text-lg text-white/90">
              Booking a service is quick and easy. We've designed our platform to provide
              a seamless experience from booking to completion.
            </p>
          </div>
        </div>
      </section>

      <section className="container-py">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    1
                  </div>
                  <h2 className="heading-md mb-4">Choose Your Service</h2>
                  <p className="text-muted-foreground">
                    Browse through our wide range of professional services and select what you need.
                    You can search by category, view detailed service descriptions, and check ratings.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Explore services by category</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>View detailed service descriptions</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Compare ratings and reviews</span>
                    </li>
                  </ul>
                </div>
                <div className="order-first flex items-center justify-center md:order-last">
                  <div className="relative max-w-sm overflow-hidden rounded-xl border bg-card p-2 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&w=500&q=80"
                      alt="Browse services"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <div className="relative max-w-sm overflow-hidden rounded-xl border bg-card p-2 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80"
                      alt="Schedule service"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    2
                  </div>
                  <h2 className="heading-md mb-4">Schedule Your Booking</h2>
                  <p className="text-muted-foreground">
                    Select a convenient date and time for your service. You can choose immediate bookings
                    or schedule for a future date based on your needs and provider availability.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Flexible Scheduling</h4>
                        <p className="text-xs text-muted-foreground">Book today or later</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Choose Time Slots</h4>
                        <p className="text-xs text-muted-foreground">Morning to evening</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    3
                  </div>
                  <h2 className="heading-md mb-4">Expert Service at Your Doorstep</h2>
                  <p className="text-muted-foreground">
                    Our verified professional will arrive at your location at the scheduled time.
                    You can track their arrival in real-time through our app.
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-1">
                        <Home className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-sm">Doorstep service delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <Clipboard className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-sm">Transparent service process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <PhoneCall className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Direct communication with professional</span>
                    </div>
                  </div>
                </div>
                <div className="order-first flex items-center justify-center md:order-last">
                  <div className="relative max-w-sm overflow-hidden rounded-xl border bg-card p-2 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
                      alt="Service at doorstep"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <div className="relative max-w-sm overflow-hidden rounded-xl border bg-card p-2 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=500&q=80"
                      alt="Payment and feedback"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    4
                  </div>
                  <h2 className="heading-md mb-4">Payment and Feedback</h2>
                  <p className="text-muted-foreground">
                    Once the service is completed to your satisfaction, make a secure payment through our app.
                    Share your feedback and rating to help us improve and assist other users.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Secure Payments</h4>
                        <p className="text-xs text-muted-foreground">Multiple payment options</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <ThumbsUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Rate & Review</h4>
                        <p className="text-xs text-muted-foreground">Share your experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="heading-md mb-6">Ready to Experience Hassle-Free Services?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/contact">
                    <MessageCircle className="h-5 w-5" /> Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
