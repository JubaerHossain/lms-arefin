import type { NextPage } from "next";
import CashCourseContainer from "../components/cash-course-container";
import CountrySkillsPlatformContainer from "../components/country-skills-platform-container";
import DreamUniversityContainer from "../components/dream-university-container";
import ClassContainer from "../components/class-container";
import EnrollmentContainer from "../components/enrollment-container";
import SelfLearningContainer from "../components/self-learning-container";
import HomeWorkContainer from "../components/home-work-container";
import StudentParentContainer from "../components/student-parent-container";
import DownloadsContainer from "../components/downloads-container";
import BangladeshLearningPlatformCont from "../components/bangladesh-learning-platform-cont";
import MobileAppContainer from "../components/mobile-app-container";
import DownloadAppContainer from "../components/download-app-container";

const HomePage01: NextPage = () => {
  return (
    <main className="relative bg-p2a-color-text-or-01 w-full h-[10496px] overflow-hidden text-left text-base text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="absolute top-[0px] left-[240px] bg-p2a-color-text-or-01 w-[1440px] h-[10496px] overflow-hidden">
        <div className="absolute top-[3513px] left-[0px] flex flex-col items-start justify-start">
          <CashCourseContainer />
          <CountrySkillsPlatformContainer />
          <DreamUniversityContainer
            prop="ভর্তি পরীক্ষা"
            prop1="স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি"
            prop2="ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।"
            rectangle14="/rectangle-144@2x.png"
            aUnit="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            rectangle141="/rectangle-143@2x.png"
            aUnit1="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            rectangle142="/rectangle-145@2x.png"
            aUnit2="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            rectangle143="/rectangle-146@2x.png"
            aUnit3="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
          />
          <DreamUniversityContainer
            prop="চাকরি প্রস্তুতি"
            prop1="সরকারি চাকরির সর্বোচ্চ প্রস্তুতি"
            prop2="বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!"
            rectangle14="/rectangle-147@2x.png"
            aUnit="বিসিএস প্রিলি লাইভ কোর্স"
            rectangle141="/rectangle-148@2x.png"
            aUnit1="ব্যাংক জবস কোর্স"
            rectangle142="/rectangle-149@2x.png"
            aUnit2="English for Govt. Jobs"
            rectangle143="/rectangle-1410@2x.png"
            aUnit3="সরকারি চাকরি প্রস্তুতি বেসিক কোর্স"
            propBackgroundColor="#fff"
          />
        </div>
        <div className="absolute top-[3366px] left-[630px] rounded bg-main-color1 h-11 flex flex-row py-[12.5px] px-6 box-border items-center justify-center gap-[8px] text-p2a-color-text-or-01">
          <div className="relative tracking-[0.02em] leading-[20px] font-medium">
            আপনার ক্লাস বেছে নিন
          </div>
          <img
            className="relative w-5 h-5 shrink-0 overflow-hidden"
            alt=""
            src="/systemlinearrowdroprightline1.svg"
          />
        </div>
        <ClassContainer />
        <div className="absolute top-[80px] left-[-240px] w-[1920px] h-[124px]">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(89.72deg,_#a22a2b,_#ae3132)] w-[503.92px] h-[124px]" />
          <div className="absolute top-[0px] left-[1416.08px] [background:linear-gradient(89.72deg,_#ae3132,_#a22a2b)] w-[503.92px] h-[124px]" />
          <img
            className="absolute top-[0px] left-[503.92px] w-[916.74px] h-[124px] object-cover"
            alt=""
            src="/image-201@2x.png"
          />
        </div>
        <EnrollmentContainer />
        <SelfLearningContainer />
        <div className="absolute top-[2391px] left-[404px] flex flex-col items-center justify-start gap-[24px] text-center text-25xl">
          <div className="relative leading-[56px] font-semibold">
            <p className="m-0">বছর জুড়ে অনলাইন ব্যাচে কী কী</p>
            <p className="m-0">থাকছে?</p>
          </div>
          <div className="relative text-lg leading-[28px] font-medium text-p2a-color-text-c3 text-left">
            সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
            পড়াশুনার অগ্রযাত্রা
          </div>
        </div>
        <img
          className="absolute top-[2753px] left-[662px] w-[640px] h-[510px] object-cover"
          alt=""
          src="/image-230@2x.png"
        />
        <div className="absolute top-[2803px] left-[49px] rounded-lg bg-ghostwhite flex flex-col p-6 items-center justify-center text-xl">
          <div className="flex flex-col items-start justify-center gap-[13px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-9 h-9 shrink-0 object-cover"
                alt=""
                src="/image-231@2x.png"
              />
              <div className="relative leading-[24px] font-semibold">
                লাইভ ক্লাসের মাধ্যমে সম্পূর্ণ সিলেবাস কাভার
              </div>
            </div>
            <div className="flex flex-row py-2.5 pr-2.5 pl-[50px] items-start justify-start text-lg text-p2a-color-text-c3">
              <div className="relative leading-[28px] font-medium">
                <p className="m-0">
                  একজন শিক্ষক ক্লাস নিবেন, দ্বিতীয় শিক্ষক তোমাদের বিভিন্ন
                  প্রশ্নের উত্তর
                </p>
                <p className="m-0">দিবেন</p>
              </div>
            </div>
          </div>
        </div>
        <HomeWorkContainer
          image231="/image-2311@2x.png"
          prop="লেকচার শিট এবং রেকর্ডেড ক্লাস"
        />
        <HomeWorkContainer
          image231="/image-2312@2x.png"
          prop="নিয়মিত হোমওয়ার্ক ও পরীক্ষা"
          propTop="3132px"
        />
        <div className="absolute top-[7082px] left-[0px] flex flex-col pt-[60px] px-12 pb-[120px] items-center justify-center gap-[80px]">
          <StudentParentContainer />
          <DownloadsContainer />
        </div>
        <div className="absolute top-[8164px] left-[0px] flex flex-col py-[120px] px-12 items-center justify-center gap-[80px]">
          <BangladeshLearningPlatformCont />
          <MobileAppContainer />
        </div>
        <DownloadAppContainer />
      </div>
    </main>
  );
};

export default HomePage01;
