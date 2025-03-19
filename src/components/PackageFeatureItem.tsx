
import React from 'react';
import { Check } from 'lucide-react';

interface PackageFeatureItemProps {
  children: React.ReactNode;
}

const PackageFeatureItem = ({ children }: PackageFeatureItemProps) => (
  <div className="flex items-start gap-2 mb-3">
    <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
    <span className="text-darkblue-800 text-sm">{children}</span>
  </div>
);

export default PackageFeatureItem;
