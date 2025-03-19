
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm, { ContactFormValues } from '@/components/contact/ContactForm';
import ComplaintForm, { ComplaintFormValues } from '@/components/contact/ComplaintForm';
import BusinessInfo from '@/components/contact/BusinessInfo';
import FaqSidebar from '@/components/contact/FaqSidebar';

const Contact = () => {
  const { toast } = useToast();
  
  const onContactSubmit = (data: ContactFormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Contact form submitted:', data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };
  
  const onComplaintSubmit = (data: ComplaintFormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Complaint form submitted:', data);
    
    toast({
      title: "Demande envoyée !",
      description: "Nous traiterons votre réclamation dans les plus brefs délais.",
    });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <ContactHeader />

        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Business Info */}
            <div>
              <BusinessInfo />
            </div>
            
            {/* Main Content - Complaint Form */}
            <div className="lg:col-span-1">
              <ComplaintForm onSubmit={onComplaintSubmit} />
            </div>
            
            {/* Right Sidebar - FAQ and Contact Info */}
            <div>
              <FaqSidebar />
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
