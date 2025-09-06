import React from 'react';
import { Check, X, Zap, Clock, DollarSign, Users } from 'lucide-react';

const WhyBetterSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Response Time',
      legalAI: 'Instant (24/7)',
      traditional: '2-5 business days',
      others: '1-24 hours',
      icon: Clock
    },
    {
      feature: 'Cost per Query',
      legalAI: '$0.50 - $5',
      traditional: '$200 - $500',
      others: '$10 - $50',
      icon: DollarSign
    },
    {
      feature: 'Accuracy Rate',
      legalAI: '99.9%',
      traditional: '95-98%',
      others: '85-95%',
      icon: Zap
    },
    {
      feature: 'Availability',
      legalAI: '24/7/365',
      traditional: 'Business hours',
      others: 'Limited hours',
      icon: Users
    }
  ];

  const features = [
    { name: 'Document Analysis', legalAI: true, traditional: false, others: true },
    { name: 'Real-time Collaboration', legalAI: true, traditional: false, others: false },
    { name: 'Predictive Analytics', legalAI: true, traditional: false, others: false },
    { name: 'Multi-language Support', legalAI: true, traditional: false, others: true },
    { name: 'Mobile Application', legalAI: true, traditional: false, others: true },
    { name: 'API Integration', legalAI: true, traditional: false, others: false },
    { name: 'Custom Workflows', legalAI: true, traditional: true, others: false },
    { name: 'White-label Solutions', legalAI: true, traditional: false, others: false }
  ];

  return (
    <section id="why-better" className="section-padding bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      
      <div className="container-padding relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why our <span className="text-gradient">AI in Law</span> is better?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare Legal.AI with traditional legal services and other AI tools. See why thousands of legal professionals choose us.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div key={item.feature} className="card-feature text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.feature}</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <div className="font-medium text-primary">Legal.AI</div>
                  <div className="text-foreground">{item.legalAI}</div>
                </div>
                <div className="p-2 bg-muted rounded-lg">
                  <div className="font-medium text-muted-foreground">Traditional</div>
                  <div className="text-muted-foreground">{item.traditional}</div>
                </div>
                <div className="p-2 bg-muted rounded-lg">
                  <div className="font-medium text-muted-foreground">Other Tools</div>
                  <div className="text-muted-foreground">{item.others}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="card-feature overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary">Legal.AI</th>
                  <th className="text-center py-4 px-6 font-semibold text-muted-foreground">Traditional Research</th>
                  <th className="text-center py-4 px-6 font-semibold text-muted-foreground">Other Tools</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={`${index % 2 === 0 ? 'bg-muted/20' : ''}`}>
                    <td className="py-4 px-6 font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.legalAI ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.traditional ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.others ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the difference?
          </p>
          <button className="btn-hero backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg hover:shadow-primary/25">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBetterSection;