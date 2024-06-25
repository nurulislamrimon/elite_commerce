"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Slider from "react-slider";

const PriceRange = () => {
  const router = useRouter();
  const minValue = 0;
  const maxValue = 1000;
  const [values, setValues] = useState([minValue, maxValue]);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    router.push(
      `/category/filtered-products?min=${newValues[0]}&max=${newValues[1]}`
    );
  };

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold [font-size:_clamp(18px,10vw,24px)]">
        PRICE RANGE
      </h2>
      <div>
        <Slider
          className="w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider"
          min={0}
          max={1000}
          value={values}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between mt-3.5">
        <span className="text-base">Min Price: ${values[0]}</span>
        <span className="text-base">Max Price: ${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
