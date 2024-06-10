"use client";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductViewImage = ({ product }: { product: IProduct }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(product?.productPhotos[0]);
  }, [product]);

  const handleChangePhoto = (item: string) => {
    setSelectedImage(item);
    localStorage.setItem("selectedImage", item);
  };

  const slicedProducts = product?.productPhotos.slice(0, 4);
  return (
    <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:flex-1">
      <div className=" flex md:flex-col gap-3">
        {slicedProducts?.map((image: any) => (
          <div
            key={image._id}
            className={`border cursor-pointer rounded-lg flex items-center justify-center hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] overflow-hidden ${
              selectedImage === image ? "border-fuchsia-700 " : ""
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-14 h-14 md:w-20 md:h-24 shrink-0 relative">
              <Image
                src={`${server_url + image}`}
                alt="demo Printer"
                fill
                objectFit="cover"
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="w-full h-full top-0 left-0 object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center border border-gray-300  rounded-lg w-full">
        {selectedImage && (
          <div className="relative shrink-0 h-96 w-96 md:h-[420px] md:w-[400px]">
            <Image
              src={`${server_url + selectedImage}`}
              alt="Product Photo"
              fill
              objectFit="cover"
              sizes="(max-width: 350px) 50vw, (max-width: 350px) 60vw, 65vw"
              className="w-full h-full top-0 left-0 object-cover p-10 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductViewImage;
