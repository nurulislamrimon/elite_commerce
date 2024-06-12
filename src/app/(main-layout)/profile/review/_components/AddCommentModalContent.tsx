import { Button } from "@/Components/Buttons";
import StarRating from "@/Components/StarRating";
import Image from "next/image";
import React from "react";

const AddCommentModalContent = () => {
  let rating = 3;
  return (
    <div className="flex flex-col h-full">
      <div>
        <p>Product Review</p>
        <div className="py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="bg-gradient-primary-light p-8 rounded-full h-40 w-40">
            <Image src="/" height={100} width={100} alt="Product Photo" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="my-6 flex-grow">
        <div className="flex items-center justify-between">
          <small>Rate your satisfaction</small>
          <StarRating rating={rating} />
        </div>

        <textarea
          className="w-full h-36 border border-black-10 rounded-lg p-5 my-5"
          maxLength={100}
          placeholder="Write Here"
        ></textarea>
      </div>

      <div>
        <Button className="py-2 w-full bg-gradient-primary rounded-full text-white">
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default AddCommentModalContent;