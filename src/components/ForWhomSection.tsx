import React, { useState } from 'react';
import { Users, Briefcase, Building, Scale } from 'lucide-react';

const ForWhomSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consumers');

  const tabs = [
    {
      id: 'consumers',
      label: 'Consumers',
      icon: Users,
      title: 'Legal Help for Everyone',
      description: 'Get instant legal guidance for personal matters without the complexity and high costs of traditional legal services.',
      points: [
        'Understand your rights and obligations',
        'Get help with contracts and agreements',
        'Navigate family law and estate planning',
        'Access affordable legal consultation'
      ],
      image: '👥'
    },
    {
      id: 'individual-lawyers',
      label: 'Individual Lawyers',
      icon: Briefcase,
      title: 'Enhance Your Practice',
      description: 'Boost your efficiency and deliver better client outcomes with AI-powered legal research and document analysis.',
      points: [
        'Accelerate legal research by 10x',
        'Automate document review and analysis',
        'Improve case strategy with AI insights',
        'Increase billable hour efficiency'
      ],
      image: '⚖️'
    },
    {
      id: 'law-firms',
      label: 'Law Firms',
      icon: Building,
      title: 'Scale Your Operations',
      description: 'Transform your firm\'s productivity with enterprise-grade AI tools designed for collaborative legal work.',
      points: [
        'Streamline team collaboration',
        'Standardize document templates',
        'Manage multiple cases efficiently',
        'Generate detailed analytics and reports'
      ],
      image: '🏢'
    },
    {
      id: 'enterprises',
      label: 'Enterprises',
      icon: Scale,
      title: 'Corporate Legal Solutions',
      description: 'Manage legal compliance, contracts, and risk assessment at scale with AI-powered enterprise solutions.',
      points: [
        'Automate contract management',
        'Ensure regulatory compliance',
        'Risk assessment and mitigation',
        'Legal spend optimization'
      ],
      image: '🏛️'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab)!;

  return (
    <section id="for-whom" className="section-padding relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container-padding relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Who is <span className="text-gradient">AI Lawyer</span> for?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered legal platform serves diverse users, from individuals seeking legal guidance to large enterprises managing complex legal operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-[1.02]'
                    : 'bg-card hover:bg-muted border border-border hover:border-primary/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeTab === tab.id ? 'bg-primary-foreground/20' : 'bg-primary/10'
                  }`}>
                    <tab.icon className={`w-6 h-6 ${
                      activeTab === tab.id ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${
                      activeTab === tab.id ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {tab.label}
                    </h3>
                    <p className={`text-sm ${
                      activeTab === tab.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {tab.label === 'Consumers' ? 'Personal legal guidance' :
                       tab.label === 'Individual Lawyers' ? 'Solo practice enhancement' :
                       tab.label === 'Law Firms' ? 'Team collaboration tools' :
                       'Enterprise legal management'}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="card-feature lg:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{activeTabData.image}</div>
              <h3 className="text-2xl font-bold mb-4">{activeTabData.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {activeTabData.description}
              </p>
            </div>

            <div className="space-y-4">
              {activeTabData.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;