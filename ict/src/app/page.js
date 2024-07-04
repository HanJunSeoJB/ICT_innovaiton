'use client'

import React, { useState } from 'react';
import { Calendar, MapPin, Search, Plus, Minus } from 'lucide-react';
import ActivityCard from './components/ActivityCard';
import ExampleMap from './components/ExampleMap';
import ReviewCard from './components/ReviewCard';
import TourPassBenefit from './components/TourPassBenefit';

const places = [
  {
    name: '전주 한옥마을',
    type: 'landmark',
    description: '전통과 현대가 공존하는 아름다운 한옥 마을',
    keywords: [
      { text: '전통적인', sentiment: 'positive' },
      { text: '사진명소', sentiment: 'positive' },
      { text: '붐빔', sentiment: 'negative' },
      { text: '문화체험', sentiment: 'positive' },
    ],
    reviews: [
      {
        content: "전통 한옥의 아름다움을 느낄 수 있는 곳이에요. 한복 입고 산책하는 것도 추천!",
        keywords: [{ text: '전통미', sentiment: 'positive' }, { text: '한복체험', sentiment: 'positive' }],
        link: "https://blog.naver.com/example1"
      },
      {
        content: "주말에는 사람이 너무 많아서 좀 힘들었어요. 평일 방문을 추천합니다.",
        keywords: [{ text: '혼잡', sentiment: 'negative' }, { text: '평일추천', sentiment: 'positive' }],
        link: "https://blog.naver.com/example2"
      },
      {
        content: "맛집도 많고 볼거리도 많아서 하루 종일 즐겁게 구경했어요!",
        keywords: [{ text: '다양한 볼거리', sentiment: 'positive' }, { text: '맛집', sentiment: 'positive' }],
        link: "https://blog.naver.com/example3"
      }
    ],
    x: 100,
    y: 150
  },
  {
    name: '덕진관',
    type: 'food',
    description: '전주의 대표적인 향토 음식을 파는 음식점',
    keywords: [
      { text: '맛있는', sentiment: 'positive' },
      { text: '건강한', sentiment: 'positive' },
      { text: '가격이 비쌈', sentiment: 'negative' },
      { text: '다양한 재료', sentiment: 'positive' },
    ],
    reviews: [
      {
        content: "고소한 콩나물과 신선한 나물, 육회의 조화가 일품이에요!",
        keywords: [{ text: '고소함', sentiment: 'positive' }, { text: '신선한 재료', sentiment: 'positive' }],
        link: "https://blog.naver.com/example4"
      },
      {
        content: "전통 방식으로 만든 비빔밥이라 건강에도 좋고 맛도 훌륭해요.",
        keywords: [{ text: '전통 방식', sentiment: 'positive' }, { text: '건강식', sentiment: 'positive' }],
        link: "https://blog.naver.com/example5"
      },
      {
        content: "맛은 좋지만 가격이 조금 비싼 편이에요. 관광지라 그런가 봐요.",
        keywords: [{ text: '맛있음', sentiment: 'positive' }, { text: '가격이 비쌈', sentiment: 'negative' }],
        link: "https://blog.naver.com/example6"
      }
    ],
    x: 150,
    y: 100
  },
  {
    name: '한복체험',
    type: 'activity',
    description: '전통 한복을 입고 한옥마을 관광',
    keywords: [
      { text: '인생샷', sentiment: 'positive' },
      { text: '문화체험', sentiment: 'positive' },
      { text: '대여비용', sentiment: 'negative' },
      { text: '재미있는', sentiment: 'positive' },
    ],
    reviews: [
      {
        content: "친구들과 함께 한복 입고 사진 찍으니 정말 추억이 됐어요!",
        keywords: [{ text: '추억만들기', sentiment: 'positive' }, { text: '포토존', sentiment: 'positive' }],
        link: "https://blog.naver.com/example7"
      },
      {
        content: "한복이 정말 예쁘고 다양해요. 골라 입는 재미가 있어요.",
        keywords: [{ text: '다양한 선택', sentiment: 'positive' }, { text: '예쁜 한복', sentiment: 'positive' }],
        link: "https://blog.naver.com/example8"
      },
      {
        content: "대여 비용이 조금 부담되긴 하지만, 경험은 정말 좋았어요.",
        keywords: [{ text: '비용 부담', sentiment: 'negative' }, { text: '좋은 경험', sentiment: 'positive' }],
        link: "https://blog.naver.com/example9"
      }
    ],
    x: 200,
    y: 200
  },
  {
    name: '광장민속식당',
    type: 'food',
    description: '덕진광장 앞에 있는 맛있는 삼겹살 가게',
    keywords: [
      { text: '맛있는', sentiment: 'positive' },
      { text: '삼겹살', sentiment: 'positive' },
      { text: '가격이 비쌈', sentiment: 'negative' },
      { text: '해물탕 무료 제공', sentiment: 'positive' },
    ],
    reviews: [
      {
        content: "해물탕이 맛있어요!",
        keywords: [{ text: '해물탕', sentiment: 'positive' }, { text: '매콤함', sentiment: 'positive' }],
        link: "https://blog.naver.com/example4"
      },
      {
        content: "고기가 훌륭합니다.",
        keywords: [{ text: '통삼겹', sentiment: 'positive' }, { text: '맛있음', sentiment: 'positive' }],
        link: "https://blog.naver.com/example5"
      },
      {
        content: "맛은 좋지만 가격이 조금 비싼 편이에요.",
        keywords: [{ text: '맛있음', sentiment: 'positive' }, { text: '가격이 비쌈', sentiment: 'negative' }],
        link: "https://blog.naver.com/example6"
      }
    ],
    x: 300,
    y: 100
  }
];

const FasTravelPrototype = () => {
  const [duration, setDuration] = useState(3);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleAddPlace = (place) => {
    if (!selectedPlaces.find(p => p.name === place.name)) {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  const handleRemovePlace = (placeName) => {
    setSelectedPlaces(selectedPlaces.filter(p => p.name !== placeName));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-teal-500 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">FasTravel</h1>
      </header>
      
      <main className="flex-grow flex p-4 md:p-6 max-w-7xl mx-auto w-full">
        <div className="w-1/2 pr-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">전북 힐링 여행코스</h2>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2" size={20} />
                <span>여행 기간</span>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => setDuration(prev => Math.max(1, prev - 1))}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="mx-4 font-semibold">{duration}박 {duration + 1}일</span>
                <button 
                  onClick={() => setDuration(prev => Math.min(7, prev + 1))}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Search className="mr-2" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="장소 검색..."
                className="flex-grow border rounded px-2 py-1"
              />
            </div>
          </div>

          <div className="space-y-4">
            {places.filter(place => place.name.toLowerCase().includes(searchTerm.toLowerCase())).map((place) => (
              <ActivityCard key={place.name} activity={place} onSelect={() => {
                handleAddPlace(place);
                setSelectedActivity(place);
              }} />
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">선택된 장소</h3>
            {selectedPlaces.map((place) => (
              <div key={place.name} className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-between items-center">
                <span>{place.name}</span>
                <button 
                  onClick={() => handleRemovePlace(place.name)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 pl-4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">여행 경로</h3>
            <ExampleMap route={selectedPlaces} />
          </div>
          
          {selectedActivity && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{selectedActivity.name} 리뷰</h3>
              {selectedActivity.reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FasTravelPrototype;
