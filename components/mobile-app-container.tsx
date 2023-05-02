import type { NextPage } from "next";

const MobileAppContainer: NextPage = () => {
  return (
    <div className="rounded-2xl [background:linear-gradient(89.76deg,_#353535,_#0e2e1b_23.38%,_#4c324d_57.14%,_#353535)] w-[1344.23px] h-[529px] shrink-0 flex flex-row py-0 px-8 box-border items-end justify-center text-left text-11xl text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <div className="flex flex-col items-start justify-center gap-[40px]">
          <div className="relative leading-[42px] font-semibold">
            <p className="m-0">ডাউনলোড করুন আমাদের</p>
            <p className="m-0">মোবাইল অ্যাপ, শেখা শুরু</p>
            <p className="m-0">করুন আজ থেকেই</p>
          </div>
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <img
              className="relative w-[150px] h-12 shrink-0 overflow-hidden"
              alt=""
              src="/googleplay-1.svg"
            />
            <img
              className="relative w-[156px] h-[49px] shrink-0 object-cover"
              alt=""
              src="/image-235@2x.png"
            />
          </div>
        </div>
        <img
          className="relative w-[522.93px] h-[445px] shrink-0 object-cover"
          alt=""
          src="/image-234@2x.png"
        />
      </div>
    </div>
  );
};

export default MobileAppContainer;
