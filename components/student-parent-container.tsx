import type { NextPage } from "next";
import CourseContainer from "./course-container";

const StudentParentContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[40px] text-center text-25xl text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="relative leading-[56px] font-semibold">
        <p className="m-0">কেন আমরাই শিক্ষার্থী ও</p>
        <p className="m-0">অভিভাবকগণের প্রথম পছন্দ?</p>
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px] text-justify text-base text-p2a-color-text-c3">
        <CourseContainer courseSectionInstructions="কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”।" />
        <CourseContainer courseSectionInstructions="অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।" />
        <CourseContainer courseSectionInstructions="আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।" />
      </div>
    </div>
  );
};

export default StudentParentContainer;
