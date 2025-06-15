"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function CustomCarousel({ children, images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 4000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= images.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return images.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="container__slider h-[500px] lg:h-[900px]">
      {images.map((item, index) => {
        return (
          <div
            className={
              "h-full relative slider__item slider__item-active-" +
              (activeIndex + 1)
            }
            key={index}
          >
            <Image
              key={index}
              src={item.imgURL}
              alt={item.imgAlt}
              fill
              className="h-full absolute w-full object-cover"
            />

            <div className="w-[60%] lg:w-[40%] z-40 bg-amber-50 h-full absolute left-0 pl-6 lg:pl-20 top-0 lg:top-[100px] text-black animated-gradient rounded-tr-[600px] flex items-end pb-20 lg:items-center">
              <h4 className="font-black lg:text-[50px] text-orange-500 text-shadow-lg mimi">
                {item.title}{" "}
                <span className="text-white">{item.description}</span>
              </h4>
            </div>
          </div>
        );
      })}

      <div className="container__slider__links">
        {images.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default CustomCarousel;
