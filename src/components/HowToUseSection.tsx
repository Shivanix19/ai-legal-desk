import React from 'react';
import { UserPlus, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';

const HowToUseSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your account in less than 2 minutes. Choose between consumer or professional plans.',
      icon: UserPlus,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Ask a Question',
      description: 'Type your legal question or upload documents for analysis. Our AI understands natural language.',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Get AI Insights',
      description: 'Receive instant, accurate legal insights powered by our advanced AI trained on millions of legal documents.',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500'
    },
    {
      number: 4,
      title: 'Take Action',
      description: 'Use the insights to make informed decisions, draft documents, or proceed with confidence.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="how-to-use" className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How to use <span className="text-gradient">Legal AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with Legal.AI in just four simple steps. Our intuitive platform makes legal assistance accessible to everyone.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-primary/20 -translate-x-1/2 z-0"></div>
                )}

                <div className="card-feature text-center relative z-10 bg-background">
                  {/* Step Number */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-0.5 mx-auto mb-6`}>
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to revolutionize your legal workflow?
          </p>
          <button className="btn-hero">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;