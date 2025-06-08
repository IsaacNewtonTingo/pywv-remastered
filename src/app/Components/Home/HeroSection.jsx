import React from "react";
import CustomCarousel from "../CustomCarousel";
import images from "@/app/data/images";

export default function HeroSection() {
  return (
    <CustomCarousel>
      {images.map((image, index) => {
        return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
      })}
    </CustomCarousel>
  );
}
