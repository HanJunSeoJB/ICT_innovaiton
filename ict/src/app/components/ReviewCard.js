import { ThumbsUp, ThumbsDown, ExternalLink } from 'lucide-react';

const ReviewCard = ({ review }) => (
  <div className="bg-gray-100 rounded-lg p-3 mb-2">
    <p className="text-sm mb-2">{review.content}</p>
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        {review.keywords.map((keyword, index) => (
          <span key={index} className={`px-2 py-1 rounded-full text-xs ${keyword.sentiment === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {keyword.sentiment === 'positive' ? <ThumbsUp size={12} className="inline mr-1" /> : <ThumbsDown size={12} className="inline mr-1" />}
            {keyword.text}
          </span>
        ))}
      </div>
      <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
        <ExternalLink size={14} className="mr-1" />
        리뷰 보기
      </a>
    </div>
  </div>
);

export default ReviewCard;
