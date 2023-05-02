import type { NextPage } from "next";

const DownloadsContainer: NextPage = () => {
  return (
    <div className="rounded-2xl [background:linear-gradient(89.76deg,_#353535,_#0e2e1b_23.38%,_#4c324d_57.14%,_#353535)] w-[1344.23px] flex flex-col py-0 px-[136px] box-border items-start justify-start text-left text-11xl text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-row items-center justify-start gap-[175px]">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[42px] font-semibold">
            <p className="m-0">সেরা শিক্ষকের তৈরি ক্লাস নোট এবং</p>
            <p className="m-0">লেকচার শিট ডাউনলোড করতে</p>
            <p className="m-0">এক্সপ্লোর করুন “Free Downloads”</p>
            <p className="m-0">সেকশন</p>
          </div>
          <div className="rounded bg-main-color1 h-11 shrink-0 flex flex-row py-[12.5px] px-6 box-border items-center justify-center gap-[8px] text-base">
            <img
              className="relative w-5 h-5 shrink-0 overflow-hidden"
              alt=""
              src="/fidownload.svg"
            />
            <div className="relative tracking-[0.02em] leading-[20px] font-medium">
              ফ্রি ডাউনলোড
            </div>
          </div>
        </div>
        <img
          className="relative w-[438.23px] h-[341px] shrink-0 object-cover"
          alt=""
          src="/image-232@2x.png"
        />
      </div>
    </div>
  );
};

export default DownloadsContainer;
