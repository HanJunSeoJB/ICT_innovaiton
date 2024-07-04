import { Landmark, Utensils, Briefcase, ThumbsUp, ThumbsDown } from 'lucide-react';

const ActivityCard = ({ activity, onSelect }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer" onClick={() => onSelect(activity)}>
    <div className="flex items-center mb-2">
      {activity.type === 'landmark' && <Landmark size={20} className="mr-2 text-blue-500" />}
      {activity.type === 'food' && <Utensils size={20} className="mr-2 text-red-500" />}
      {activity.type === 'activity' && <Briefcase size={20} className="mr-2 text-green-500" />}
      <h4 className="text-lg font-semibold">{activity.name}</h4>
    </div>
    <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {activity.keywords.map((keyword, index) => (
        <span key={index} className={`px-2 py-1 rounded-full text-xs flex items-center ${keyword.sentiment === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {keyword.sentiment === 'positive' ? <ThumbsUp size={12} className="mr-1" /> : <ThumbsDown size={12} className="mr-1" />}
          {keyword.text}
        </span>
      ))}
    </div>
  </div>
);

export default ActivityCard;
