import { Button } from "@/Components/Buttons";

import ReviewCustomLink from "./_components/reviewCustomLink";
import { Suspense } from "react";

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start">
        <ReviewCustomLink path="/profile/review">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            To Review
          </Button>
        </ReviewCustomLink>
        <ReviewCustomLink path="/profile/review/all-review-history">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            Review History
          </Button>
        </ReviewCustomLink>
      </div>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default ReviewLayout;
