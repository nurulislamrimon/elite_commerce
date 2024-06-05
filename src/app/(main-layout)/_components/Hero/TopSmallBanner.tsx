import { Button } from "@/Components/Buttons";
import { server_url } from "@/constants";
import { heroTopSmallBanner } from "@/interfaces/heroTopCard.interface";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const TopSmallBanner = ({ topOffer }: { topOffer: heroTopSmallBanner }) => {
  return (
    <div
      className={`flex justify-center md:justify-between items-center p-5 gap-4 rounded-lg flex-1 w-full h-full`}
      style={{
        backgroundColor: `${
          topOffer?.backgroundColor && `#${topOffer?.backgroundColor}`
        }`,
        backgroundImage: `url(${server_url}${topOffer?.backgroundPhoto})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-36 h-36">
        <div className="absolute w-full h-full top-0 left-0 object-cover">
          <Image
            src={`${server_url + topOffer?.productPhoto}`}
            alt="Hero discount item"
            fill
            sizes="200px"
            priority={true}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <h2 className="text-base md:text-lg leading-7 line-clamp-1">
          {topOffer?.title}
        </h2>
        <div className="flex items-baseline gap-1 main-text-color font-bold">
          <span className="text-lg">$ {topOffer?.price}</span>
        </div>

        <Link href={topOffer?.link}>
          <Button className="flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-full py-2 px-7 ">
            {topOffer?.buttonText} <IconArrowRight />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopSmallBanner;
