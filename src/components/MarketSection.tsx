import React from 'react';
import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

const MarketSection: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      value: '$16.6B',
      label: 'Global Legal Tech Market 2023',
      trend: '+8.2% YoY',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      value: '47.1%',
      label: 'Law Firms Using AI Technology',
      trend: '+15.3% YoY',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: '1.3M+',
      label: 'Legal Professionals Worldwide',
      trend: '+3.1% YoY',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      value: '85%',
      label: 'Efficiency Improvement with AI',
      trend: '+12.7% YoY',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const insights = [
    {
      title: 'Rapid Market Growth',
      description: 'The legal technology market is experiencing unprecedented growth, driven by the need for efficiency and digital transformation in legal services.'
    },
    {
      title: 'AI Adoption Surge',
      description: 'Law firms are increasingly adopting AI tools to streamline operations, reduce costs, and improve client outcomes.'
    },
    {
      title: 'Competitive Advantage',
      description: 'Legal professionals using AI technology report significant improvements in productivity and client satisfaction.'
    },
    {
      title: 'Future-Ready Practice',
      description: 'Early adoption of legal AI positions firms for success in an increasingly competitive and technology-driven market.'
    }
  ];

  return (
    <section id="market" className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            More about <span className="text-gradient">Legal AI</span> market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The legal technology landscape is rapidly evolving. Discover the trends and opportunities shaping the future of legal services.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="card-feature text-center group hover:scale-105">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-xs text-green-500 font-medium">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Market Insights & Trends</h3>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={insight.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{insight.title}</h4>
                    <p className="text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-feature lg:p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Legal Tech Investment Growth</h3>
            
            {/* Simple Chart Visualization */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">2020</span>
                <div className="flex-1 mx-4">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-[60%] rounded-full"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">$10.2B</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">2021</span>
                <div className="flex-1 mx-4">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[75%] rounded-full"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">$12.8B</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">2022</span>
                <div className="flex-1 mx-4">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/70 to-primary w-[85%] rounded-full"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">$14.5B</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">2023</span>
                <div className="flex-1 mx-4">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary w-[100%] rounded-full"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">$16.6B</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Projected to reach <span className="text-primary font-medium">$25.7B by 2027</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="card-glass p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">Don't Get Left Behind</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the thousands of legal professionals already leveraging AI to transform their practice and stay competitive in the evolving legal landscape.
            </p>
            <button className="btn-hero">
              Start Your AI Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;