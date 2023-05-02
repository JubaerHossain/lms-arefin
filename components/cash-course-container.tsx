import type { NextPage } from "next";
import CourseInfoContainer from "./course-info-container";

const CashCourseContainer: NextPage = () => {
  return (
    <div className="flex flex-col py-[120px] px-12 items-center justify-center text-left text-25xl text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <div className="relative leading-[56px] font-semibold">
          চলে এসেছে নতুন ক্র্যাশ কোর্স
        </div>
        <div className="flex flex-row items-start justify-center gap-[24px] text-lg text-p2a-color-text-c2">
          <CourseInfoContainer
            courseImageUrl="/rectangle-14@2x.png"
            courseName="SSC 2023 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-141@2x.png"
            courseName="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-142@2x.png"
            courseName="HSC 23 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-143@2x.png"
            courseName="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
          />
        </div>
      </div>
    </div>
  );
};

export default CashCourseContainer;
