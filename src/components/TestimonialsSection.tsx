import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Partner at Johnson & Associates',
      content: 'Legal.AI has transformed our practice. We can now handle 3x more cases with the same team size, and our clients are amazed by the speed and accuracy of our work.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Solo Practitioner',
      content: 'As a solo lawyer, Legal.AI is like having a team of experienced associates. The document analysis feature alone has saved me hundreds of hours.',
      rating: 5,
      image: '👨‍⚖️'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Corporate Counsel at TechCorp',
      content: 'The compliance monitoring feature keeps us ahead of regulatory changes. Legal.AI has become an indispensable part of our legal operations.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Family Law Attorney',
      content: 'My clients love how quickly I can provide answers to their questions. Legal.AI helps me deliver exceptional service while managing more cases efficiently.',
      rating: 5,
      image: '👨‍💼'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What our <span className="text-gradient">users think</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of legal professionals who have transformed their practice with Legal.AI.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="card-feature text-center lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl text-primary">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-primary rotate-180">"</div>
            </div>

            <div className="relative z-10">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-6">
                {testimonials[currentIndex].image}
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-background border border-border shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-background border border-border shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Small Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="card-feature text-center">
              <div className="text-2xl mb-3">{testimonial.image}</div>
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="font-medium text-sm">{testimonial.name}</div>
              <div className="text-xs text-muted-foreground">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;