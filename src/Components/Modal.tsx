import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Buttons";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Modal = ({
  show,
  setShow,
  children,
  alignment,
  className,
  isIntercepting = false,
  showCancelBtnINSmallDevice = false,
}: {
  show: boolean | any;
  setShow: Dispatch<SetStateAction<boolean | any>>;
  children: React.ReactNode;
  alignment: "left" | "center" | "right";
  className?: string;
  isIntercepting?: boolean;
  showCancelBtnINSmallDevice?: boolean;
}) => {
  console.log(children);

  const [animate, setAnimate] = useState(false);
  const redirect = useRouter();

  let appearAnimation;
  let disappearAnimation;

  if (alignment === "left") {
    appearAnimation = "translate-x-0";
    disappearAnimation = "-translate-x-1/2";
  } else if (alignment === "center") {
    appearAnimation = "scale-1";
    disappearAnimation = "scale-0";
  } else if (alignment === "right") {
    appearAnimation = "translate-x-0";
    disappearAnimation = "translate-x-1/2";
  }

  useEffect(() => {
    if (show) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [show]);

  const handleClose = () => {
    setAnimate(false);
    if (isIntercepting) {
      redirect.back();
    }
    setTimeout(() => setShow(false), 300);
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm bg-black-transparent transition-opacity duration-300 ease-in-out flex items-center ${
        alignment === "right" && "justify-end"
      } ${alignment === "center" && "justify-center"} ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`rounded-r-xl md:rounded-3xl relative shadow-black-50 drop-shadow-2xl bg-white lg:p-5 duration-300 ease-in-out
         ${alignment !== "center" && "h-full md:h-[calc(100%-16px)] md:m-2"}
           ${animate ? appearAnimation : disappearAnimation} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close handler */}
        <Button
          className={`absolute top-5 right-5 lg:top-6 lg:right-6 ${
            showCancelBtnINSmallDevice ? "block" : "hidden"
          }`}
          onClick={handleClose}
        >
          <IconX size={20} />
        </Button>
        {/* children */}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
