import type { NextPage } from "next";
import Class512Container from "./class512-container";

const SelfLearningContainer: NextPage = () => {
  return (
    <div className="absolute top-[1607px] left-[1px] bg-ghostwhite flex flex-col py-[100px] px-12 items-center justify-center text-center text-25xl text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-col items-center justify-start gap-[40px]">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="relative leading-[56px] font-semibold">
            <p className="m-0">নিজের শেখা নিজেই গুছিয়ে</p>
            <p className="m-0">নেয়ার যাত্রা শুরু হোক</p>
          </div>
          <div className="relative text-lg leading-[28px] font-medium text-p2a-color-text-c3 text-left">
            যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-left text-5xl">
          <Class512Container
            image213="/image-2131@2x.png"
            prop="ক্লাস ৫-১২"
            prop1="ফ্রি ভিডিও, লাইভ ক্লাস"
            image2131="/image-2132@2x.png"
            prop2="স্কিলস"
            prop3="ইংলিশ, ফ্রিল্যান্সিং, স্কিলস ও আইটি"
          />
          <Class512Container
            image213="/image-2133@2x.png"
            prop="ভর্তি পরীক্ষা"
            prop1="বিশ্ববিদ্যালয়+গুচ্ছ, মেডিক্যাল"
            image2131="/image-2134@2x.png"
            prop2="চাকরি প্রস্তুতি"
            prop3="বিসিএস, ব্যাংক জবস, সরকারি চাকরি"
          />
        </div>
      </div>
    </div>
  );
};

export default SelfLearningContainer;
