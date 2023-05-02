import type { NextPage } from "next";

const Container10thGrade: NextPage = () => {
  return (
    <div className="rounded-lg bg-p2a-color-text-or-01 w-[145px] h-[222px] shrink-0 flex flex-row py-[23px] px-5 box-border items-center justify-center text-left text-lg text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-col items-center justify-start gap-[20px]">
        <img
          className="relative w-12 h-12 shrink-0 object-cover"
          alt=""
          src="/image-213@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-[2px]">
          <div className="relative leading-[22px] font-semibold">
            ১০ম শ্রেণি
          </div>
          <div className="relative text-xs leading-[22px] font-medium text-p2a-color-text-c2 text-center">
            <p className="m-0">বিজ্ঞানের ৫টি বিষয় ও</p>
            <p className="m-0">ইংরেজি</p>
          </div>
        </div>
        <img
          className="relative w-5 h-5 shrink-0 overflow-hidden"
          alt=""
          src="/uarrowright2.svg"
        />
      </div>
    </div>
  );
};

export default Container10thGrade;
