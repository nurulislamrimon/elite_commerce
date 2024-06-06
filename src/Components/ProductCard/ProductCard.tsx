import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import StarRating from "../StarRating";
import { IconShoppingCart } from "@tabler/icons-react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border border-black-10 rounded-lg group max-w-[320px] w-[calc(300px,2vw,185px)] relative md:min-h-[400px] min-h-[300px] cursor-pointer duration-500  ">
      <div className="bg-gradient-primary-light p-4">
        <ProductImageSlider
          // loading={loading}
          product={product}
          // defaultVariant={defaultVariant}
        />
      </div>

      <div className="p-4">
        <span className="[font-size:_clamp(0.7em,4vw,1em)] line-clamp-1 ">
          {product?.productName}
        </span>
        <div className="flex items-center my-2.5">
          <span className="text-positive [font-size:_clamp(0.5em,4vw,0.8em)] ">
            {product?.brand?.brandName}
          </span>
          <span className="text-black-10 mx-0.5">|</span>
          <span>
            <StarRating rating={Math.round(5)} />
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center whitespace-nowrap">
            <span className="[font-size:_clamp(0.6em,4vw,1.1em)] text-gradient-primary font-bold">
              ${50}
            </span>
            <span className="mx-0.5 text-black-10">|</span>
            <del className="text-base text-black-50 [font-size:_clamp(0.5em,4vw,0.8em)] ">
              ${70}
            </del>
          </div>
          <button className="bg-gradient-primary text-white rounded-full p-1.5 md:p-2.5 ">
            <IconShoppingCart stroke={2} height={20} width={20} />
          </button>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 hidden md:group-hover:flex gap-x-4 items-center">
        <button className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full">
          Quick View
        </button>
        <button className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full">
          Quick Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;