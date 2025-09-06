import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store in localStorage (simulating backend)
    const submissions = JSON.parse(localStorage.getItem('legalai_contacts') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    });
    localStorage.setItem('legalai_contacts', JSON.stringify(submissions));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/7 rounded-full blur-3xl animate-float" style={{ animationDelay: '4.5s' }}></div>
      
      <div className="container-padding relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Have a <span className="text-gradient">question?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you transform your legal practice with AI.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-feature lg:p-12">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 resize-vertical"
                  placeholder="Tell us about your legal technology needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">support@legal-ai.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground">Available 24/7</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;