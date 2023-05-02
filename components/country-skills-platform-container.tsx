import type { NextPage } from "next";
import LanguageLearningCoursesContain from "./language-learning-courses-contain";
import ContainerCardDark from "./container-card-dark";

const CountrySkillsPlatformContainer: NextPage = () => {
  return (
    <div className="bg-black flex flex-col py-[120px] px-12 items-center justify-center text-left text-lg text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px">
      <div className="flex flex-col items-center justify-start gap-[80px]">
        <div className="flex flex-col items-center justify-start gap-[56px]">
          <div className="flex flex-col items-center justify-start gap-[24px] text-p2a-color-text-or-02">
            <div className="relative leading-[20px] font-medium">স্কিলস</div>
            <div className="relative text-25xl leading-[56px] font-semibold text-p2a-color-text-or-01">
              দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
            </div>
            <div className="flex flex-row items-center justify-center gap-[32px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className="relative leading-[21px] font-medium">
                  দেশসেরা শিক্ষক
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className="relative leading-[20px] font-medium">
                  ৫ লাখ+শিক্ষার্থী
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className="relative leading-[20px] font-medium">
                  ৭০+ অনলাইন কোর্স
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[1344px] h-[106px] shrink-0 overflow-hidden">
            <div className="absolute top-[1px] left-[0px] flex flex-row items-center justify-start gap-[18px]">
              <LanguageLearningCoursesContain courseBundleText="Language Learning Courses" />
              <LanguageLearningCoursesContain
                courseBundleText="Bundle"
                propWidth="87px"
              />
              <LanguageLearningCoursesContain
                courseBundleText={`Skills & IT Courses`}
                propWidth="unset"
              />
              <LanguageLearningCoursesContain
                courseBundleText="Freelancing Courses"
                propWidth="unset"
              />
              <LanguageLearningCoursesContain
                courseBundleText={`Design & Creative Courses`}
                propWidth="unset"
              />
              <LanguageLearningCoursesContain
                courseBundleText="Kid’s Courses (Age 7-14)"
                propWidth="unset"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[24px]">
            <ContainerCardDark
              rectangle7="/rectangle-7@2x.png"
              iELTSCourseByMunzereenSha="ঘরে বসে Spoken English"
              munzereenShahid="Munzereen Shahid"
            />
            <div className="relative rounded-md bg-gray-100 w-[318px] h-[301px] shrink-0 overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[318px] h-[146px] object-cover"
                alt=""
                src="/rectangle-71@2x.png"
              />
              <div className="absolute top-[160px] left-[14px] h-[127px] flex flex-col items-start justify-start gap-[23px]">
                <div className="h-[84px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
                    <p className="m-0">IELTS Course by Munzereen</p>
                    <p className="m-0">Shahid</p>
                  </div>
                  <div className="relative text-sm leading-[20px] text-slategray">
                    Munzereen Shahid
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1">
                  <div className="relative leading-[20px] font-medium">
                    বিস্তারিত
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/uarrowright.svg"
                  />
                </div>
              </div>
            </div>
            <ContainerCardDark
              rectangle7="/rectangle-72@2x.png"
              iELTSCourseByMunzereenSha="সহজে Spoken আরবি"
              munzereenShahid="Mahade Hasan"
              propHeight="20px"
              propFlexShrink="0"
            />
            <ContainerCardDark
              rectangle7="/rectangle-73@2x.png"
              iELTSCourseByMunzereenSha="২৪ ঘণ্টায় কোরআন শিখি"
              munzereenShahid="মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন"
              propHeight="unset"
              propFlexShrink="unset"
            />
          </div>
        </div>
        <div className="rounded bg-main-color1 h-11 shrink-0 flex flex-row py-[12.5px] px-6 box-border items-center justify-center gap-[8px] text-base">
          <div className="relative tracking-[0.02em] leading-[20px] font-medium">
            সকল কোর্স
          </div>
          <img
            className="relative w-5 h-5 shrink-0 overflow-hidden"
            alt=""
            src="/systemlinearrowdroprightline.svg"
          />
        </div>
        <div className="relative rounded-xl bg-p2a-color-text-c1 w-[1344px] h-[210px] shrink-0 overflow-hidden text-p2a-color-text-or-02">
          <div className="absolute top-[33px] left-[381px] leading-[20px] font-medium">
            দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
            প্রোগ্রাম
          </div>
          <div className="absolute top-[174px] left-[510px] leading-[20px] font-medium">
            <span>{`আরও জানতে `}</span>
            <span className="[text-decoration:underline] text-main-color1">
              ইমেইল করুন
            </span>
            <span>{` অথবা `}</span>
            <span className="[text-decoration:underline] text-main-color1">
              কল করুন
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySkillsPlatformContainer;
