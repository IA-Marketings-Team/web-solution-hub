
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm, { ContactFormValues } from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import BusinessHours from '@/components/contact/BusinessHours';

const Contact = () => {
  const { toast } = useToast();
  
  const onSubmit = (data: ContactFormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Form submitted:', data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <ContactHeader />

        <div className="container px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm onSubmit={onSubmit} />
            
            {/* Contact Information */}
            <div>
              <ContactInfo />
              
              {/* Business Hours */}
              <BusinessHours />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <CallToAction variant="dark" />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
