"use client";

import React, { useState, useEffect, useRef } from "react";

const CARD_WIDTH = 420; // 400px card + 20px gap

const Solving = () => {
  const originalCards = [
    {
      title: "Market Forecasting & Risk Reduction",
      description:
        "Sales forecasts miss the mark, new products fail, and market entry feels like expensive guessing. AI and predictive analytics give you realistic demand forecasts based on actual market data. One retail client cut inventory waste by 40%.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "IT changes take months, integrations break constantly, and systems hold back growth. Smart automation targets your biggest operational headaches without expensive replacements. Saved a manufacturer $2.3M annually.",
    },
    {
      title: "Manual Process Automation",
      description:
        "Human inspections are slow and inconsistent. AI boosts speed, and quality control accuracy. One client catches defects 2x faster and reduced returns by 25%.",
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const cards = [...originalCards, ...originalCards, ...originalCards];
  const middleIndex = originalCards.length;

  const [currentIndex, setCurrentIndex] = useState(middleIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef();

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset position instantly after clones
  useEffect(() => {
    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex >= cards.length - middleIndex) {
        setCurrentIndex(middleIndex);
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${middleIndex * CARD_WIDTH}px)`;
      }

      if (currentIndex <= middleIndex - 1) {
        const newIndex = cards.length - middleIndex - 1;
        setCurrentIndex(newIndex);
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${newIndex * CARD_WIDTH}px)`;
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, cards.length]);

  // Animate slide when index changes
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    requestAnimationFrame(() => {
      slider.style.transition = "transform 0.6s ease-in-out";
      slider.style.transform = `translateX(-${currentIndex * CARD_WIDTH}px)`;
    });
  }, [currentIndex]);

  return (
    <div className="bg-black text-white py-16 px-4 max-w-[81rem] mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-12 text-left max-w-[76rem]">
        Solving Your Biggest Business Challenges with Advanced Technologies
      </h1>

      {/* Carousel container */}
      <div className="relative w-full max-w-[1120px] overflow-hidden px-4">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            width: `${cards.length * CARD_WIDTH}px`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[400px] mx-2 flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-slate-800 rounded-lg p-6 h-full shadow-md">
                <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  💡
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center   space-x-5  pt-10">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700   flex items-center justify-center  transition text-2xl "
          aria-label="Scroll Left"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700 flex items-center justify-center  transition text-2xl "
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Solving;
