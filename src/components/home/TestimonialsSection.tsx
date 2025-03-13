
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "I've been using Servify for all my home cleaning needs, and I couldn't be happier. The professionals are always on time, courteous, and thorough. The app makes booking so easy!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    content:
      "When my AC broke down in the middle of summer, Servify connected me with a professional who fixed it within hours. The tracking feature was especially helpful.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Working Professional",
    content:
      "As someone with a busy schedule, Servify has been a lifesaver. I can book salon services at home and even schedule them weeks in advance. Highly recommend!",
    avatar: "PS",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container-py bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-3">What Our Customers Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don't just take our word for it. Hear from our satisfied customers
            who've experienced the Servify difference.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={`/avatar-${testimonial.id}.jpg`} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
