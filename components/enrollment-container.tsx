import type { NextPage } from "next";
import Container10thGrade from "./container10th-grade";

const EnrollmentContainer: NextPage = () => {
  return (
    <div className="absolute top-[206px] left-[0px] bg-ghostwhite flex flex-row py-6 px-12 items-center justify-center text-left text-25xl text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px">
      <div className="rounded-2xl bg-gray-200 flex flex-row py-[120px] px-[222px] items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-col items-center justify-start gap-[50px]">
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <div className="relative leading-[56px] font-semibold">
                ২০২৩ সালের অনলাইন ব্যাচে ভর্তি চলছে!
              </div>
              <div className="relative text-lg leading-[28px] font-medium text-p2a-color-text-or-02">
                শ্রেণি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং
                নিয়মিত পরীক্ষার সুবিধা
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[42px] text-lg text-p2a-color-text-c1">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] text-base text-p2a-color-secondary-c1">
                <div className="relative leading-[24px] font-medium">
                  অনলাইন ব্যাচ সম্পর্কে আরও জানুন
                </div>
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/systemlinearrowdroprightline2.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-p2a-color-text-or-01 w-[900.38px] h-[154px] shrink-0 flex flex-row p-6 box-border items-center justify-center text-xl text-p2a-color-text-c1">
            <div className="flex flex-row items-center justify-start gap-[199px]">
              <div className="flex flex-col items-start justify-start gap-[14px]">
                <div className="relative leading-[28px] font-semibold">
                  <p className="m-0">
                    ১৬ থেকে ২৪ বছর বয়সী কলেজ ও বিশ্ববিদ্যালয়
                  </p>
                  <p className="m-0">
                    শিক্ষার্থীদের জন্য দেশের সর্ববৃহৎ ফাইন্যান্স অলিম্পিয়াড
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-base text-main-color1">
                  <div className="relative leading-[24px] font-medium">
                    আরও জানুন
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/systemlinearrowdroprightline3.svg"
                  />
                </div>
              </div>
              <img
                className="relative w-[188.38px] h-[106px] shrink-0 object-cover"
                alt=""
                src="/image-214@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[44px]">
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <div className="relative leading-[56px] font-semibold">
                নতুন বছর, নতুন স্কিলস
              </div>
              <div className="relative text-lg leading-[28px] font-medium text-p2a-color-text-or-02">
                নতুন বছর উপলক্ষ্যে টেন মিনিট স্কুলের বিভিন্ন কোর্স ও বান্ডেল
                পাওয়া যাবে আরো সাশ্রয়ে
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <img
                className="relative w-[188px] h-[259px] shrink-0 object-cover"
                alt=""
                src="/rectangle-6@2x.png"
              />
              <img
                className="relative w-[188px] h-[259px] shrink-0 object-cover"
                alt=""
                src="/rectangle-74@2x.png"
              />
              <img
                className="relative w-[188px] h-[259px] shrink-0 object-cover"
                alt=""
                src="/rectangle-8@2x.png"
              />
              <img
                className="relative w-[188px] h-[259px] shrink-0 object-cover"
                alt=""
                src="/rectangle-9@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentContainer;
