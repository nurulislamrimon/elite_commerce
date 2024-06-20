"use client";

import Modal from "@/Components/Modal";
import { IconBolt, IconShoppingCart, IconX } from "@tabler/icons-react";
import React from "react";
import StarRating from "@/Components/StarRating";
import Image from "next/image";
import { demoProductPhoto } from "@/assets";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import ButtonPrimaryLight from "../../brands/_components/ButtonPrimaryLight";
import Link from "next/link";

const QuickOrderItem = () => {
  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light  p-1.5 rounded-[10px]">
            <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={demoProductPhoto}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:gap-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              New UBL Bluetooth Speaker
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">UBL</span>
              <span className="text-black-10">|</span>
              <StarRating rating={4} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-xs">$500.22</span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            {/* <IncreaseDecrease orderQuantity={5} /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          $1500.66
        </strong>
      </div>
    </div>
  );
};

const OrderSummery = () => {
  return (
    <div className="md:border border-black-10 rounded-[10px] md:px-5 py-[clamp(2px,1.5vh,20px)] space-y-[clamp(2px,.5vh,20px)] bg-white">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>1300</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>14</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -$<span>50</span>
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          $<span>1264</span>
        </strong>
      </div>
      <div className="flex items-center justify-center gap-5 md:px-5">
        <ButtonPrimaryLight className="!uppercase !text-black-80 !whitespace-nowrap py-[clamp(2px,1.2vh,20px)]">
          <IconShoppingCart />
          Check Out
        </ButtonPrimaryLight>
        <ButtonPrimary className="!uppercase !whitespace-nowrap py-[clamp(2px,1.2vh,20px)]">
          <IconBolt height={18} width={18} />
          Order Now
        </ButtonPrimary>
      </div>
    </div>
  );
};

const CartButton = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setShow(true)} className="relative">
        <div className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
          0
        </div>
        <IconShoppingCart
          stroke={1.2}
          className="text-black-80"
          width={24}
          height={24}
        />
      </button>

      {show && (
        <Modal
          show={show}
          setShow={setShow}
          className="w-[600px] overflow-y-auto  scrollbar-y-remove"
          alignment="right"
          showCancelBtnINSmallDevice={show}
        >
          <div className="p-2">
            <span className="font-semibold [font-size:clamp(14px,5vw,18px)]">
              Shopping Cart
            </span>
            <div className="flex flex-col gap-2 mt-2">
              <input type="range" className="pointer-events-none" value={20} />
              <span className="block text-base">
                Buy <span className="text-gradient-primary">$900</span> more to
                get{" "}
                <span className="text-gradient-primary font-semibold">
                  Freeship
                </span>{" "}
                🔥
              </span>
            </div>
            <hr className="border border-black-10 h-[1px] my-3" />

            <div className="flex flex-col gap-2 overflow-y-auto scrollbar-y-remove h-[calc(100vh-max(350px,45vh))] pb-10">
              {[...Array(10)].map((item, index) => {
                return <QuickOrderItem key={index} />;
              })}
            </div>
            <div className="fixed bottom-0 right-1 w-[95%]  mx-auto bg-white">
              <OrderSummery />
              <div className="my-2 flex items-center justify-center">
                {" "}
                <Link
                  href={"/cart"}
                  className="text-positive text-sm uppercase "
                  onClick={() => setShow(false)}
                >
                  View Cart &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CartButton;
