import type { NextPage } from "next";

const ClassContainer: NextPage = () => {
  return (
    <div className="absolute top-[11.73px] left-[48px] flex flex-row items-center justify-center gap-[315px] text-left text-base text-p2a-color-text-c2 font-p2a-text-sub-title-1-18px">
      <img
        className="relative w-[56.53px] h-[56.53px] shrink-0 object-cover"
        alt=""
        src="/image-203@2x.png"
      />
      <div className="flex flex-row items-start justify-start gap-[36px]">
        <div className="relative tracking-[0.02em] font-medium">ক্লাস ৫-১২</div>
        <div className="relative tracking-[0.02em] font-medium">স্কিলস</div>
        <div className="relative tracking-[0.02em] font-medium">
          ভর্তি পরীক্ষা
        </div>
        <div className="relative tracking-[0.02em] font-medium">
          চাকরি প্রস্তুতি
        </div>
        <div className="relative tracking-[0.02em] font-medium">
          অনলাইন ব্যাচ ২০২৩
        </div>
      </div>
      <div className="rounded bg-main-color1 w-[98px] h-11 shrink-0 flex flex-row py-[12.5px] px-6 box-border items-center justify-center text-p2a-color-text-or-01">
        <div className="relative tracking-[0.02em] leading-[20px] font-medium">
          লগ-ইন
        </div>
      </div>
    </div>
  );
};

export default ClassContainer;
