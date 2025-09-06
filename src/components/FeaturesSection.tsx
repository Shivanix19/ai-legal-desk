import React from 'react';
import { FileText, MessageSquare, TrendingUp, Shield, Clock, Search } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Document Analysis',
      description: 'AI-powered analysis of contracts, legal documents, and case files with instant insights and risk assessment.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: '24/7 Legal Assistant',
      description: 'Get instant answers to legal questions, research assistance, and guidance anytime, anywhere.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Case Prediction',
      description: 'Leverage historical data and AI to predict case outcomes and optimize your legal strategy.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Stay updated with changing regulations and ensure your practice remains compliant.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Automatically track billable hours and generate detailed reports for client billing.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Search,
      title: 'Legal Research',
      description: 'Access vast legal databases and get relevant case law, statutes, and precedents instantly.',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Features of <span className="text-gradient">Legal AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful AI-driven tools designed to enhance your legal practice and deliver better outcomes for your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;