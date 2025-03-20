
import React from 'react';
import BusinessInfo from './BusinessInfo';
import ComplaintForm, { ComplaintFormValues } from './ComplaintForm';
import ContactForm, { ContactFormValues } from './ContactForm';
import FaqSidebar from './FaqSidebar';

interface ContactLayoutProps {
  onContactSubmit: (data: ContactFormValues) => void;
  onComplaintSubmit: (data: ComplaintFormValues) => void;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ 
  onContactSubmit, 
  onComplaintSubmit 
}) => {
  return (
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
  );
};

export default ContactLayout;
