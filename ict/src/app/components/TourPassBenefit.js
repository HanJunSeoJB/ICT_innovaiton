import { Tag } from 'lucide-react';

const TourPassBenefit = ({ benefit }) => (
  <div className="bg-yellow-100 rounded-lg p-3 mb-2 flex items-center">
    <Tag size={16} className="mr-2 text-yellow-600" />
    <span className="text-sm text-yellow-800">{benefit}</span>
  </div>
);

export default TourPassBenefit;