import React from 'react';
const ExampleMap = ({ route }) => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="0" y="0" width="400" height="300" fill="#e6f7ff" />
    {route.map((place, index) => (
      <React.Fragment key={index}>
        <circle cx={place.x} cy={place.y} r="5" fill="#ff4757" />
        <text x={place.x} y={place.y + 20} textAnchor="middle" fontSize="12">{place.name}</text>
      </React.Fragment>
    ))}
    {route.length > 1 && (
      <path 
        d={`M${route[0].x},${route[0].y} ${route.slice(1).map((place, i) => {
          const prev = route[i];
          return `Q${(prev.x + place.x) / 2},${Math.min(prev.y, place.y) - 50} ${place.x},${place.y}`;
        }).join(' ')}`} 
        stroke="#2ed573" 
        strokeWidth="2" 
        fill="none" 
      />
    )}
  </svg>
);

export default ExampleMap;
